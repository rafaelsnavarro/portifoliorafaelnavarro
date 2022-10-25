import React from 'react'
import * as S from "../Styles/About"
import About2 from '../Assets/About/About2.jpg'
import About3 from '../Assets/About/About3.jpg'

export default function Sobre() {
  return (
    <S.Section2>
      <S.Div>
      <S.Image src={About2} alt="" />
      <S.Paragrafo>Saudações, meu nome é Rafael Navarro, sou natural de Santarém-PA.
        Atualmente em transição de carreira da área de Telecom para Programação, estou em busca da 
        minha primeira oportunidade de emprego como Dev Front End Júnior. 
        </S.Paragrafo>
        </S.Div>
      <S.Div>
      <S.Paragrafo>
        Com meu curso de Front End finalizado pela empresa Vai Na Web, reforcei meus skills em HTML, CSS, Javascript e React.
        Com disponibilidade de inicio imediáto, podendo exercer minha profissão em home office.
      </S.Paragrafo>
      <S.Image src={About3} alt="" />
      </S.Div>
      </S.Section2>

     
  )
}
