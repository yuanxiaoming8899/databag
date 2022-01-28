package databag

import (
  "errors"
  "strings"
  "time"
  "net/url"
  "net/http"
  "encoding/json"
  "net/http/httptest"
  "github.com/gorilla/mux"
  "github.com/gorilla/websocket"
)

const TEST_READDEADLINE = 2
const TEST_REVISIONWAIT = 100

type TestCard struct {
  Guid string
  Token string
  CardId string
  GroupId string
}

type TestContact struct {
  Guid string
  Token string
  Revisions chan *Revision
  A TestCard
  B TestCard
  C TestCard
  D TestCard
}

type TestGroup struct {
  A TestContact
  B TestContact
  C TestContact
  D TestContact
}

func GetTestRevision(status chan *Revision) (rev *Revision) {
  time.Sleep(TEST_REVISIONWAIT * time.Millisecond)
  for {
		select {
		case r:=<-status:
      rev = r
		default:
      return
		}
	}
}

func SendEndpointTest(
      endpoint func(http.ResponseWriter, *http.Request),
      params *map[string]string,
      body interface{},
      token string,
      response interface{},
    ) (err error) {

  var r *http.Request
  var w *httptest.ResponseRecorder

  if r, w, err = NewRequest("REST", "/NAME", body); err != nil {
    return
  }
  if params != nil {
    r = mux.SetURLVars(r, *params)
  }
  if token != "" {
    SetBearerAuth(r, token)
  }
  endpoint(w, r)

  resp := w.Result()
  if resp.StatusCode != 200 {
    err = errors.New("response failed");
    return
  }
  if response == nil {
    return
  }
  dec := json.NewDecoder(resp.Body)
  dec.Decode(response)
  return
}

//
//    A --- connected,group               connected,group --- B
//    | \                                                    /|
//    |   requested,nogroup                  confirmed,group  |
//    |                                                       |
//     connected,group                                       ,
//                                  |
//                                --x--
//                                  |
//     connected,group                                       ,
//    |                                                       |
//    |  confirmed,nogroup                   pending,nogroup  |
//    |/                                                     \|
//    C --- connected,group               connected,group --- D
//
func AddTestGroup(prefix string) (*TestGroup, error) {
    var err error
    var rev *Revision
    var ws *websocket.Conn

    // allocate contacts
    g := &TestGroup{}
    if g.A.Guid, g.A.Token, err = AddTestAccount(prefix+"A"); err != nil {
      return g, err
    }
    if g.B.Guid, g.B.Token, err = AddTestAccount(prefix+"B"); err != nil {
      return g, err
    }
    if g.C.Guid, g.C.Token, err = AddTestAccount(prefix+"C"); err != nil {
      return g, err
    }
    if g.D.Guid, g.D.Token, err = AddTestAccount(prefix+"D"); err != nil {
      return g, err
    }

    // setup A
    if g.A.B.CardId, err = AddTestCard(g.A.Token, g.B.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.A.Token, g.A.B.CardId); err != nil {
      return g, err
    }
    if g.A.B.GroupId, err = GroupTestCard(g.A.Token, g.A.B.CardId); err != nil {
      return g, err
    }
    if g.A.C.CardId, err = AddTestCard(g.A.Token, g.C.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.A.Token, g.A.C.CardId); err != nil {
      return g, err
    }
    if g.A.C.GroupId, err = GroupTestCard(g.A.Token, g.A.C.CardId); err != nil {
      return g, err
    }
    if g.A.D.CardId, err = AddTestCard(g.A.Token, g.D.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.A.Token, g.A.D.CardId); err != nil {
      return g, err
    }

    // setup B
    if g.B.A.CardId, err = AddTestCard(g.B.Token, g.A.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.B.Token, g.B.A.CardId); err != nil {
      return g, err
    }
    if g.B.A.GroupId, err = GroupTestCard(g.B.Token, g.B.A.CardId); err != nil {
      return g, err
    }
    if g.B.C.CardId, err = AddTestCard(g.B.Token, g.C.Token); err != nil {
      return g, err
    }
    if g.B.C.GroupId, err = GroupTestCard(g.B.Token, g.B.C.CardId); err != nil {
      return g, err
    }

    // setup C
    if g.C.D.CardId, err = AddTestCard(g.C.Token, g.D.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.C.Token, g.C.D.CardId); err != nil {
      return g, err
    }
    if g.C.D.GroupId, err = GroupTestCard(g.C.Token, g.C.D.CardId); err != nil {
      return g, err
    }
    if g.C.A.CardId, err = AddTestCard(g.C.Token, g.A.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.C.Token, g.C.A.CardId); err != nil {
      return g, err
    }
    if g.C.A.GroupId, err = GroupTestCard(g.C.Token, g.C.A.CardId); err != nil {
      return g, err
    }
    if g.C.B.CardId, err = AddTestCard(g.C.Token, g.B.Token); err != nil {
      return g, err
    }

    // setup D
    if g.D.C.CardId, err = AddTestCard(g.D.Token, g.C.Token); err != nil {
      return g, err
    }
    if err = OpenTestCard(g.D.Token, g.D.C.CardId); err != nil {
      return g, err
    }
    if g.D.C.GroupId, err = GroupTestCard(g.D.Token, g.D.C.CardId); err != nil {
      return g, err
    }

    // get contact tokens
    if g.A.B.Token, err = GetCardToken(g.A.Token, g.A.B.CardId); err != nil {
      return g, err
    }
    if g.B.A.Token, err = GetCardToken(g.B.Token, g.B.A.CardId); err != nil {
      return g, err
    }
    if g.C.A.Token, err = GetCardToken(g.C.Token, g.C.A.CardId); err != nil {
      return g, err
    }
    if g.C.D.Token, err = GetCardToken(g.C.Token, g.C.D.CardId); err != nil {
      return g, err
    }
    if g.D.C.Token, err = GetCardToken(g.D.Token, g.D.C.CardId); err != nil {
      return g, err
    }

    // connect websockets
    rev = &Revision{}
    if ws, err = StatusConnection(g.A.Token, rev); err != nil {
      return g, err
    }
    g.A.Revisions = make(chan *Revision, 64)
    g.A.Revisions <- rev
    go MonitorStatus(ws, &g.A);
    rev = &Revision{}
    if ws, err = StatusConnection(g.B.Token, rev); err != nil {
      return g, err
    }
    g.B.Revisions = make(chan *Revision, 64)
    g.B.Revisions <- rev
    go MonitorStatus(ws, &g.B);
    rev = &Revision{}
    if ws, err = StatusConnection(g.C.Token, rev); err != nil {
      return g, err
    }
    g.C.Revisions = make(chan *Revision, 64)
    g.C.Revisions <- rev
    go MonitorStatus(ws, &g.C);
    rev = &Revision{}
    if ws, err = StatusConnection(g.D.Token, rev); err != nil {
      return g, err
    }
    g.D.Revisions = make(chan *Revision, 64)
    g.D.Revisions <- rev
    go MonitorStatus(ws, &g.D);

    return g, nil
}

func MonitorStatus(ws *websocket.Conn, contact *TestContact) {
  var data []byte
  var dataType int
  var err error

  // reset any timeout
  ws.SetReadDeadline(time.Time{})

  // read revision update
  for ;; {
    if dataType, data, err = ws.ReadMessage(); err != nil {
      LogMsg("failed to read status conenction")
      return
    }
    if dataType != websocket.TextMessage {
      LogMsg("invalid status data type")
      return
    }
    rev := &Revision{}
    if err = json.Unmarshal(data, rev); err != nil {
      LogMsg("invalid status data")
      return
    }
    contact.Revisions <- rev
  }
}

func GetCardToken(account string, cardId string) (token string, err error) {
  var r *http.Request
  var w *httptest.ResponseRecorder
  var card Card
  vars := make(map[string]string)

  if r, w, err = NewRequest("GET", "/contact/cards/{cardId}", nil); err != nil {
    return
  }
  vars["cardId"] = cardId
  r = mux.SetURLVars(r, vars)
  SetBearerAuth(r, account)
  GetCard(w, r)
  if err = ReadResponse(w, &card); err != nil {
    return
  }
  if card.CardData.Status != APP_CARDCONNECTED {
    err = errors.New("card not connected")
    return
  }
  token = card.CardProfile.Guid + "." + card.CardData.Token
  return
}

func GroupTestCard(account string, cardId string) (groupId string, err error) {
  var r *http.Request
  var w *httptest.ResponseRecorder
  var subject *Subject
  var group Group
  var cardData CardData
  vars := make(map[string]string)

  // add new group
  subject = &Subject{
    DataType: "imagroup",
    Data: "group data with name and logo",
  }
  if r, w, err = NewRequest("POST", "/share/groups", subject); err != nil {
    return
  }
  SetBearerAuth(r, account)
  AddGroup(w, r)
  if err = ReadResponse(w, &group); err != nil {
    return
  }
  groupId = group.GroupId

  // set contact group
  if r, w, err = NewRequest("PUT", "/contact/cards/{cardId}/groups/{groupId}", nil); err != nil {
    return
  }
  vars["groupId"] = group.GroupId
  vars["cardId"] = cardId
  r = mux.SetURLVars(r, vars)
  SetBearerAuth(r, account)
  SetCardGroup(w, r)
  if err = ReadResponse(w, &cardData); err != nil {
    return
  }
  return
}

func OpenTestCard(account string, cardId string) (err error) {
  var r *http.Request
  var w *httptest.ResponseRecorder
  var msg DataMessage
  var card Card
  var vars = map[string]string{ "cardId": cardId }
  var contactStatus ContactStatus

  // set to connecting state
  if r, w, err = NewRequest("PUT", "/contact/cards/{cardId}/status", APP_CARDCONNECTING); err != nil {
    return
  }
  r = mux.SetURLVars(r, vars)
  SetBearerAuth(r, account)
  SetCardStatus(w, r)
  if err = ReadResponse(w, &card); err != nil {
    return
  }

  // get open message
  if r, w, err = NewRequest("GET", "/contact/cards/{cardId}/openMessage", nil); err != nil {
    return
  }
  r = mux.SetURLVars(r, vars)
  SetBearerAuth(r, account)
  GetOpenMessage(w, r)
  if err = ReadResponse(w, &msg); err != nil {
    return
  }

  // set open message 
  if r, w, err = NewRequest("PUT", "/contact/openMessage", msg); err != nil {
    return
  }
  SetOpenMessage(w, r)
  if err = ReadResponse(w, &contactStatus); err != nil {
    return
  }

  // update status if connected
  if contactStatus.Status == APP_CARDCONNECTED {
    if r, w, err = NewRequest("PUT", "/contact/cards/{cardId}/status?token=" + contactStatus.Token, APP_CARDCONNECTED); err != nil {
      return
    }
    r = mux.SetURLVars(r, vars)
    SetBearerAuth(r, account)
    SetCardStatus(w, r)
    if err = ReadResponse(w, &card); err != nil {
      return
    }
  }
  return
}

func AddTestCard(account string, contact string) (cardId string, err error) {
  var r *http.Request
  var w *httptest.ResponseRecorder
  var msg DataMessage
  var card Card

  // get A identity message
  if r, w, err = NewRequest("GET", "/profile/message", nil); err != nil {
    return
  }
  r.Header.Add("TokenType", APP_TOKENAPP)
  SetBearerAuth(r, contact)
  GetProfileMessage(w, r)
  if err = ReadResponse(w, &msg); err != nil {
    return
  }

  // add A card in B
  if r, w, err = NewRequest("POST", "/contact/cards", &msg); err != nil {
    return
  }
  SetBearerAuth(r, account)
  AddCard(w, r)
  if err = ReadResponse(w, &card); err != nil {
    return
  }
  cardId = card.CardId
  return
}

func AddTestAccount(username string) (guid string, token string, err error) {
  var r *http.Request
  var w *httptest.ResponseRecorder

  var access string
  app := AppData{
    Name: "Appy",
    Description: "A test app",
    Url: "http://app.example.com",
  };
  var profile Profile
  var login = username + ":pass"

  // get account token
  if r, w, err= NewRequest("POST", "/admin/accounts", nil); err != nil {
    return
  }
  SetBasicAuth(r, "admin:pass")
  AddNodeAccount(w, r)
  if err = ReadResponse(w, &access); err != nil {
    return
  }

  // set account profile
  if r, w, err = NewRequest("GET", "/account/profile", nil); err != nil {
    return
  }
  SetBearerAuth(r, access);
  SetCredentials(r, login)
  AddAccount(w, r)
  if err = ReadResponse(w, &profile); err != nil {
    return
  }
  guid = profile.Guid

  // acquire new token for attaching app
  if r, w, err = NewRequest("POST", "/account/apps", nil); err != nil {
    return
  }
  SetBasicAuth(r, login);
  AddAccountApp(w, r);
  if err = ReadResponse(w, &access); err != nil {
    return
  }

  // attach app with token
  if r, w, err = NewRequest("PUT", "/account/apps", &app); err != nil {
    return
  }
  SetBearerAuth(r, access)
  SetAccountApp(w, r)
  if err = ReadResponse(w, &access); err != nil {
    return
  }
  token = guid + "." + access
  return
}

func NewRequest(rest string, path string, obj interface{}) (*http.Request, *httptest.ResponseRecorder, error) {
  w := httptest.NewRecorder()
  if(obj != nil) {
    body, err := json.Marshal(obj)
    if err != nil {
      return nil, nil, err
    }
    reader := strings.NewReader(string(body))
    return httptest.NewRequest(rest, path, reader), w, nil
  }

  return httptest.NewRequest(rest, path, nil), w, nil
}



// Websocket test support
type statusHandler struct {}
func (h *statusHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
  Status(w, r)
}
func StatusConnection(token string, rev *Revision) (ws *websocket.Conn, err error) {
  var data []byte
  var dataType int

  // connect to websocket
  s := httptest.NewServer(&statusHandler{})
  wsUrl, _ := url.Parse(s.URL)
  wsUrl.Scheme = "ws"
  if ws, _, err = websocket.DefaultDialer.Dial(wsUrl.String(), nil); err != nil {
    return
  }

  // send authentication
  announce := Announce{ AppToken: token }
  if data, err = json.Marshal(&announce); err != nil {
    return
  }
  ws.WriteMessage(websocket.TextMessage, data)

  // read revision response
  ws.SetReadDeadline(time.Now().Add(TEST_READDEADLINE * time.Second))
  if dataType, data, err = ws.ReadMessage(); err != nil {
    return
  }
  if dataType != websocket.TextMessage {
    err = errors.New("invalid status data type")
    return
  }
  if err = json.Unmarshal(data, rev); err != nil {
    return
  }
  return
}
func StatusRevision(ws *websocket.Conn, rev *Revision) (err error) {
  var data []byte
  var dataType int

  // read revision update
  ws.SetReadDeadline(time.Now().Add(TEST_READDEADLINE * time.Second))
  if dataType, data, err = ws.ReadMessage(); err != nil {
    return
  }
  if dataType != websocket.TextMessage {
    err = errors.New("invalid status data type")
    return
  }
  if err = json.Unmarshal(data, rev); err != nil {
    return
  }
  return
}
