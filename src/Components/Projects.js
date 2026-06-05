import React from "react";
import { Globalstyle } from "../Styles/Globalstyle";
import Calc from "../Assets/Projects/calc.jpg";
import Bruxo from "../Assets/Projects/bruxo.jpg";
import Portflow from "../Assets/Projects/portflow.jpg";
import LOL from "../Assets/Projects/lol.jpg";
import ODS from "../Assets/Projects/ods.jpg";
import * as S from "../Styles/Projects";

export default function Projetos() {
  const projetos = [
    {
      imagem: Calc,
      titulo: "Calculadora React",
      descricao:
        "Aplicação desenvolvida em React para realizar operações matemáticas básicas com uma interface simples e funcional.",
      tecnologias: "React • JavaScript • CSS",
      deploy: "https://codesandbox.io/s/desafio-vnw-calculadora-react-39x1n6?file=/src/styles.css",
      github: "https://github.com/rafaelsnavarro/calculadorareact",
    },
    {
      imagem: ODS,
      titulo: "ODS",
      descricao:
        "Projeto inspirado nos Objetivos de Desenvolvimento Sustentável, com foco em conscientização e apresentação visual acessível.",
      tecnologias: "React • Styled Components • CSS",
      deploy: "https://ods-three.vercel.app/",
      github: "https://github.com/rafaelsnavarro/ods",
    },
    {
      imagem: Bruxo,
      titulo: "Pearson Hardman",
      descricao:
        "Landing page inspirada no escritório Pearson Hardman, com foco em layout moderno, responsividade e apresentação visual.",
      tecnologias: "HTML • CSS • JavaScript",
      deploy: "https://github.com/rafaelsnavarro/pearsonhardman",
      github: "https://github.com/rafaelsnavarro/pearsonhardman",
    },
    {
      imagem: Portflow,
      titulo: "Portflow",
      descricao:
        "Projeto de interface com foco em organização visual, estrutura de página e boas práticas de estilização.",
      tecnologias: "React • Styled Components • CSS",
      deploy: "https://github.com/rafaelsnavarro/portflow/tree/master",
      github: "https://github.com/rafaelsnavarro/portflow/tree/master",
    },
    {
      imagem: LOL,
      titulo: "League of Legends",
      descricao:
        "Projeto temático inspirado no universo League of Legends, explorando interface visual, estilização e experiência do usuário.",
      tecnologias: "React • JavaScript • CSS",
      deploy: "https://lol-five-phi.vercel.app/",
      github: "https://github.com/rafaelsnavarro/lol",
    },
  ];

  return (
    <S.Container id="projetos">
      <Globalstyle />
      <S.Title>Projetos</S.Title>

      <S.Grid>
        {projetos.map((projeto) => (
          <S.Card key={projeto.titulo}>
            <S.Projeto1 src={projeto.imagem} alt={projeto.titulo} />

            <S.Titulo1>{projeto.titulo}</S.Titulo1>

            <S.Descricao>{projeto.descricao}</S.Descricao>

            <S.Tecnologias>{projeto.tecnologias}</S.Tecnologias>

            <S.ButtonBox>
              <S.Button href={projeto.deploy} target="_blank" rel="noreferrer">
                Ver Projeto
              </S.Button>

              <S.Button href={projeto.github} target="_blank" rel="noreferrer">
                GitHub
              </S.Button>
            </S.ButtonBox>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
}