import React from "react";

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/27302446?s=460&u=3dd13ebcaae548fe35d71e26dc3875c05a5f3e92&v=4"
          alt=""
        />
        <div>
          <strong>Alessandra Natassja</strong>
          <span>Química</span>
        </div>
      </header>

      <p>Lorem ipsum</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;
