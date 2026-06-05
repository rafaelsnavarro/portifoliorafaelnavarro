import React from 'react'
import * as S from "../Styles/About"
import About2 from '../Assets/About/About2.jpg'
import About3 from '../Assets/About/About3.jpg'

export default function Sobre() {
  return (
    <S.Section2>
      <S.Div>
      <S.Image src={About2} alt="" />
<S.Paragrafo>
  Olá! Meu nome é Rafael Navarro e sou natural de Santarém, Pará.
  Atualmente estou em transição de carreira da área de Telecomunicações
  para o desenvolvimento Front-End, buscando minha primeira oportunidade
  profissional como Desenvolvedor Front-End Júnior.
</S.Paragrafo>
        </S.Div>
      <S.Div>
<S.Paragrafo>
  Concluí minha formação em Front-End pela Vai Na Web, onde desenvolvi
  conhecimentos em HTML, CSS, JavaScript e React. Após um período
  afastado da programação, retornei aos estudos e à criação de projetos,
  focado em evolução contínua, boas práticas de desenvolvimento e na
  construção de interfaces modernas e responsivas.
</S.Paragrafo>
      <S.Image src={About3} alt="" />
      </S.Div>
      </S.Section2>

     
  )
}
