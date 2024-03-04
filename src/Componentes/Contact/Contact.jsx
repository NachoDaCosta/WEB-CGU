import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container" id="contacto">
      <h1>Contactanos</h1>
      <div className="second-row-contact">
        <div className="icon-container">
          <a href="https://chat.whatsapp.com/HnJIXbjwK2wLvG0vDxSEsR">
            <img alt="" src="./imgs/whatsapp.webp" className="icon" />
          </a>
          <div>WhatsApp</div>
        </div>
        <div className="icon-container">
          <a href="https://www.instagram.com/cgu.fing/">
            <img alt="" src="./imgs/insta.webp" className="icon" />
          </a>
          <div>Instagram</div>
        </div>
        <div className="icon-container">
          <a href="https://www.youtube.com/@CGUFING">
            <img alt="" src="./imgs/youtube.webp" className="icon" />
          </a>
          <div>Youtube</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
