import { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'context/AppContext';
import { CardContext } from 'context/CardContext';
import { StoreContext } from 'context/StoreContext';
import { ViewportContext } from 'context/ViewportContext';
import { ProfileContext } from 'context/ProfileContext';
import { RingContext } from 'context/RingContext';

export function useSession() {

  const [state, setState] = useState({
    cardUpdated: false,
    contactGuid: null,
    contactListing: null,
    cardId: null,
    channelId: null,
    conversation: false,
    details: false,
    cards: false,
    listing: false,
    contact: false,
    profile: false,
    account: false,
    loading: false,
    ringing: [],
  });

  const app = useContext(AppContext);
  const card = useContext(CardContext);
  const store = useContext(StoreContext);
  const ring = useContext(RingContext);
  const viewport = useContext(ViewportContext);
  const profile = useContext(ProfileContext);

  const navigate = useNavigate();
  
  const storeStatus = useRef(null);
  const cardStatus = useRef(0);

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }));
  }

  useEffect(() => {
    const ringing = [];
    const expired = Date.now(); 
    ring.state.ringing.forEach(call => {
      if (call.expires > expired && !call.status) {
        const { callId, cardId, calleeToken } = call;
        const contact = card.state.cards.get(cardId);
        const { imageSet, name, handle, node, guid } = contact.data.cardProfile || {};
        const { token } = contact.data.cardDetail;
        const contactToken = `${guid}.${token}`;
        const img = imageSet ? card.actions.getCardImageUrl(cardId) : 'avatar';
        ringing.push({ cardId, img, name, handle, contactNode: node, callId, contactToken, calleeToken });
      }
    });
    updateState({ ringing });
  }, [ring.state]);

  useEffect(() => {
    if (!profile.state.identity?.guid) {
      updateState({ loading: true });
    }
    else {
      updateState({ loading: false });
    }
  }, [profile]);

  useEffect(() => {
    if (!app.state.status) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [app.state]);

  useEffect(() => {
    updateState({ display: viewport.state.display });
  }, [viewport]);

  useEffect(() => {
    let updated;
    const contacts = Array.from(card.state.cards.values());
    contacts.forEach(contact => {
      if (!updated || updated < contact?.data?.cardDetail?.statusUpdated) {
        updated = contact?.data?.cardDetail?.statusUpdated;
      }
    });
    cardStatus.current = updated;
    updateState({ cardUpdated: cardStatus.current > storeStatus.current });
  }, [card]);

  useEffect(() => {
    storeStatus.current = store.actions.getValue('cards:updated');
    updateState({ cardUpdated: cardStatus.current > storeStatus.current });
  }, [store]);

  const actions = {
    openCards: () => {
      updateState({ cards: true });
    },
    closeCards: () => {
      updateState({ cards: false });
    },
    openListing: () => {
      updateState({ listing: true });
    },
    closeListing: () => {
      updateState({ listing: false });
    },
    openContact: (contactGuid, contactListing) => {
      updateState({ contact: true, contactGuid, contactListing });
    },
    closeContact: () => {
      updateState({ contact: false });
    },
    openProfile: () => {
      updateState({ profile: true });
    },
    closeProfile: () => {
      updateState({ profile: false });
    },
    openAccount: () => {
      updateState({ account: true });
    },
    closeAccount: () => {
      updateState({ account: false });
    },
    openConversation: (channelId, cardId) => {
      updateState({ conversation: true, cardId, channelId });
    },
    closeConversation: () => {
      updateState({ conversation: false, cardId: null, channelId: null });
    },
    openDetails: () => {
      updateState({ details: true });
    },
    closeDetails: () => {
      updateState({ details: false });
    },
    ignore: (call) => {
      ring.actions.ignore(call.cardId, call.callId);
    },
    decline: (call) => {
      ring.actions.decline(call.cardId, call.callId);
    },
    accept: (call) => {
      const { cardId, callId, contactNode, contactToken, calleeToken } = call;
      ring.actions.accept(cardId, callId, contactNode, contactToken, calleeToken);
    },
  };

  return { state, actions };
}

