import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>&copy; Hecho por Nacho Da Costa v0.1</div>
      <div className="trabajo">
        <div>Si sabes react y quieres ayudar</div>
        <a href="https://wa.me/59893853398?text=hola%2C%20vengo%20por%20lo%20de%20react">
          <img alt="logo-wpp-footer" src="./imgs/whatsapp.webp" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
