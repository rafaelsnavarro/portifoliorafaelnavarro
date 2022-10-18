import React from 'react'
import { Globalstyle } from '../Styles/Globalstyle'
import * as S from "../Styles/About"
import About2 from '../Assets/About/About2.jpg'
import Unama from '../Assets/About/unama.jpg'
import Amz from '../Assets/About/amz.jpg';
import Tv from '../Assets/About/tv.jpg';
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3} from "react-icons/io5";
import {  IoLogoGithub } from "react-icons/io5";

export default function Sobre() {
  return (
    <S.Section2>
      <Globalstyle/>
      <S.Image src={About2} alt="" />
      <S.Paragrafo>Saudações, meu nome é Rafael Navarro, sou natural de Santarém-PA.
        Atualmente em transição de carreira da área de Telecom para Programação, estou em busca da 
        minha primeira oportunidade de emprego como Dev Front End Júnior. Abaixo contarei um pouco sobre minha carreira profissional e pessoal. 
        </S.Paragrafo>
      <S.Image src= {Unama} alt="" /> 
      <S.Text>
        Vamos começar falando sobre aonde iniciei os estudos, na Universidade da Amazônia - UNAMA.
        Aonde aprendi conceitos de programação, gestão, administração. No início de 2018. 
      </S.Text>
      <S.Image src={Amz} alt ="" />
      <S.Texto>
        Minha primeira experiência profissional foi na empresa Amazonet Provedor de Internet, 
        aonde aprendi conceitos básicos de Redes de Computadores, atendimento ao cliente e Suporte Técnico para
        cliente e equipe técnica. Iniciei em Novembro de 2018
      </S.Texto>
      <S.Image src ={Tv} alt ="" />
      <S.Textotv>
        Um registro de uma visita aos estúdios da TV Tapajós, filial da TV Globo em Santarém. 
      </S.Textotv>



<S.Language>
 <S.Icons3>
  <S.Icons4><IoLogoReact/></S.Icons4>
<S.Icons4><IoLogoJavascript/></S.Icons4>
  <S.Icons4><IoLogoHtml5/></S.Icons4>
  <S.Icons4><IoLogoCss3/></S.Icons4>
  <S.Icons4><IoLogoGithub/></S.Icons4>
  <S.Icons4></S.Icons4>
 </S.Icons3>
</S.Language>
      </S.Section2>
     
  )
}
