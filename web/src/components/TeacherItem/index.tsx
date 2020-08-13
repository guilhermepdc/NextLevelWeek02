import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import'./styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/48804617?s=460&u=802b7dd54478ea2a233b0e3f2571ca3ea1117ecf&v=4" alt="Carvalho"/>
        <div>
          <strong>Guilherme Carvalho</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Estudante de Graduação em Engenharia de Software <br/> <br/> Youtuber no canal Carreira Dev
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 0,99</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;