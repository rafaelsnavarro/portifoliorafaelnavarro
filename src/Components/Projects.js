import React from 'react'
import { Globalstyle } from '../Styles/Globalstyle'
import Snake from '../Assets/Projects/snake.jpg'
import Calc from '../Assets/Projects/calc.jpg'
import Bruxo from '../Assets/Projects/bruxo.jpg'
import Portflow from '../Assets/Projects/portflow.jpg'
import LOL from '../Assets/Projects/lol.jpg'
import Velha from '../Assets/Projects/velha.jpg'
import * as S from "../Styles/Projects"

export default function Projetos() {
  return (
    <S.Container>
      <Globalstyle/>
      <figure>
        <a href="https://snake-orcin-seven.vercel.app/" rel="noreferrer">
        {" "}
        <S.Projeto1 src={Snake} alt="Jogo da Cobrinha" /> {" "}
        </a>
        <S.Titulo1>Jogo da Cobrinha</S.Titulo1>
      </figure>
      <figure>
        <a href="https://codesandbox.io/s/desafio-vnw-calculadora-react-39x1n6?file=/src/styles.css" rel="noreferrer">
        {" "}
        <S.Projeto1 src={Calc} alt="Calculadora React" /> {" "}
        </a>
        <S.Titulo1>Calculadora React</S.Titulo1>
      </figure>
      <figure>
        <a href="https://codepen.io/rafaelsnavarro/pen/BaJbPgP?editors=1100" rel="noreferrer">
        {" "}
        <S.Projeto1 src={Bruxo} alt="The Witcher" /> {" "}
        </a>
        <S.Titulo1>The Witcher</S.Titulo1>
      </figure>
      <figure>
        <a href="https://github.com/rafaelsnavarro/portflow/tree/master" rel="noreferrer">
        {" "}
        <S.Projeto1 src={Portflow} alt="Portflow" /> {" "}
        </a>
        <S.Titulo1>Portflow</S.Titulo1>
      </figure>
      <figure>
        <a href="https://jogodavelha-three.vercel.app/" rel="noreferrer">
        {" "}
        <S.Projeto1 src={Velha} alt="Jogo da Velha" /> {" "}
        </a>
        <S.Titulo1>Jogo da Velha</S.Titulo1>
      </figure>
      <figure>
        <a href="https://lol-five-phi.vercel.app/" rel="noreferrer">
        {" "}
        <S.Projeto1 src={LOL} alt="LOL" /> {" "}
        </a>
        <S.Titulo1>League of Legends</S.Titulo1>
      </figure>
    </S.Container>
  )
}
