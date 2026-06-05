import React from "react";
import * as S from "../Styles/Home";
import Update from "../Assets/Body/Update.jpg";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

export default function Home() {
  return (
    <S.ContainerM>
      <S.Content>
        <S.TextBox>
          <S.Subtitle>Olá, eu sou</S.Subtitle>

         <S.Title>Rafael S. Navarro</S.Title>

<S.Techs>
  React • JavaScript • HTML5 • CSS3 • Styled Components
</S.Techs>

<S.Description>
  Desenvolvedor Front-End em evolução, criando interfaces modernas,
  responsivas e focadas na experiência do usuário.
</S.Description>

          <S.ButtonBox>
            <S.Button href="#projetos">Ver projetos</S.Button>
            <S.Button
              href="https://www.linkedin.com/in/rafaelsnavarro26/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </S.Button>
          </S.ButtonBox>
        </S.TextBox>

        <S.ImageBox>
          <S.Foto src={Update} alt="Foto de Rafael Navarro" />
        </S.ImageBox>

        <S.Footer>
          <S.ReactIcons>
            <S.Links href="https://github.com/rafaelsnavarro" target="_blank" rel="noreferrer">
              <RiGithubFill />
            </S.Links>
          </S.ReactIcons>

          <S.ReactIcons>
            <S.Links href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <RiInstagramFill />
            </S.Links>
          </S.ReactIcons>

          <S.ReactIcons>
            <S.Links href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <RiLinkedinBoxFill />
            </S.Links>
          </S.ReactIcons>
        </S.Footer>
      </S.Content>
    </S.ContainerM>
  );
}