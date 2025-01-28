import React, { useReducer, useEffect, useRef, useMemo } from "react";
import logo from "../../assets/images/icon.png";
import "./FloatingWhatsApp.css";
import imessage from "../../assets/images/imessage.png";

const initialState = {
  isOpen: false,
  isDelay: true,
  isNotification: false
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true, isNotification: false };
    case "close":
      return { ...state, isOpen: false };
    case "delay":
      return { ...state, isDelay: false };
    case "notification":
      return { ...state, isNotification: true };
    default:
      return state;
  }
}

function FloatingWhatsApp({
  phoneNumber = "+5213317659254",
  accountName = "Support",
  chatMessage = "Hello! 👋🧹 How can we assist you with your cleaning needs today? 🧼✨ Our team is here to help!",
  placeholder = "Type a message...",
  darkMode = false
}) {
  const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, initialState);
  const timeNow = useMemo(() => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), []);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => dispatch({ type: "delay" }), 1500);
    }
  }, [isOpen]);

  const handleOpen = () => dispatch({ type: "open" });
  const handleClose = () => dispatch({ type: "close" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current?.value) {
      const message = inputRef.current.value;
       // Para abrir iMessage o SMS en el dispositivo
       window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, "_blank");
      inputRef.current.value = "";
    }
  };

  const WhatsappSVG = () => (
    <img src={imessage} alt="iMessage" width="60" height="60" />
  );

  const CheckSVG = () => (
    <svg viewBox="0 0 16 15" width="16" height="15">
      <path
        fill="currentColor"
        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      />
    </svg>
  );

  const CloseSVG = () => (
    <svg focusable="false" viewBox="0 0 24 24" width="24" height="24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );

  const SendSVG = () => (
    <svg focusable="false" viewBox="0 0 24 24" width="35" height="35">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );

  return (
    <div>
      {!isOpen && (
        <div className="whatsappButton" onClick={handleOpen}>
          <WhatsappSVG />
          {isNotification && <span className="notificationIndicator">1</span>}
        </div>
      )}
      <div className={`whatsappChatBox ${isOpen ? "open" : "close"}`} style={{ height: isOpen ? 'auto' : 0 }}>
        <header className="chatHeader">
          <div className="avatar">
            <img src={logo} width="30" height="30" alt="logo"  />
          </div>
          <div className="status">
            <span className="statusTitle">{accountName}</span>
            <span className="statusSubtitle">Typically replies within 30 min</span>
          </div>
          <div className="close" onClick={handleClose}>
            <CloseSVG />
          </div>
        </header>
        <div className="chatBody">
          {isDelay ? (
            <div className="chatBubble">
              <div className="typing">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          ) : (
            <div className="message">
              <span className="triangle" />
              <span className="accountName">{accountName}</span>
              <p className="messageBody">{chatMessage}</p>
              <span className="messageTime">
                {timeNow}
                <span style={{ marginLeft: 5 }}>
                  <CheckSVG />
                </span>
              </span>
            </div>
          )}
        </div>
        <footer className="chatFooter">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder={placeholder}
              ref={inputRef}
              dir="auto"
            />
            <button type="submit" className="buttonSend">
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;
