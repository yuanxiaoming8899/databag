package databag

const APP_BODYLIMIT = 1048576
const APP_VERSION = "0.0.1"
const APP_ATTACHEXPIRE = 300
const APP_CREATEEXPIRE = 86400
const APP_CONNECTEXPIRE = 30
const APP_KEYSIZE = 4096
const APP_RSA4096 = "RSA4096"
const APP_RSA2048 = "RSA2048"
const APP_SIGNPKCS1V15 = "PKCS1v15"
const APP_SIGNPSS = "PSS"
const APP_MSGAUTHENTICATE = "authenticate"
const APP_MSGIDENTITY = "identity"
const APP_MSGCONNECT = "connect"
const APP_MSGDISCONNECT = "disconnect"
const APP_CARDPENDING = "pending"
const APP_CARDCONFIRMED = "confirmed"
const APP_CARDREQUESTED = "requested"
const APP_CARDCONNECTING = "connecting"
const APP_CARDCONNECTED = "connected"

func AppCardStatus(status string) bool {
  if status == APP_CARDPENDING {
    return true
  }
  if status == APP_CARDCONFIRMED {
    return true
  }
  if status == APP_CARDREQUESTED {
    return true
  }
  if status == APP_CARDCONNECTING {
    return true
  }
  if status == APP_CARDCONNECTED {
    return true
  }
  return false
}