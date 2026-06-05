import React from "react";
import * as S from "../Styles/Skills";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents } from "react-icons/si";

export default function Skills() {
  return (
    <S.Container>
      <S.Title>Tecnologias</S.Title>

      <S.Grid>
        <S.Card>
          <FaReact />
          <span>React</span>
        </S.Card>

        <S.Card>
          <SiJavascript />
          <span>JavaScript</span>
        </S.Card>

        <S.Card>
          <FaHtml5 />
          <span>HTML5</span>
        </S.Card>

        <S.Card>
          <FaCss3Alt />
          <span>CSS3</span>
        </S.Card>

        <S.Card>
          <SiStyledcomponents />
          <span>Styled Components</span>
        </S.Card>

        <S.Card>
          <FaGitAlt />
          <span>Git</span>
        </S.Card>

        <S.Card>
          <FaGithub />
          <span>GitHub</span>
        </S.Card>
      </S.Grid>
    </S.Container>
  );
}