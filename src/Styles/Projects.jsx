import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 2rem;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const Card = styled.figure`
  background: #111;
  border-radius: 16px;
  padding: 1rem;
  margin: 0;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Projeto1 = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Titulo1 = styled.h2`
  color: #b22222;
  margin-top: 1rem;
  text-align: center;
`;

export const Descricao = styled.p`
  color: white;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

export const Tecnologias = styled.p`
  color: #b22222;
  font-weight: 600;
  margin-top: 1rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background: white;
    color: black;
  }
`;