import styled from "styled-components";

export const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
`;
export const Image = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 10px 10px 10px 10px;
  border: solid black 2px;
  justify-content: right;
  margin-top: 2vh;
`;

export const Div = styled.div`
  width: 70%;
  height: 55vh;
  display: flex;

`;
export const Paragrafo = styled.p`
  font-family: "Montserrat", sans-serif;
  width: 700px;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 2vh;
  color: white;
  @media (max-width: 768px) {
    width: 300px;
    font-size: 14px;
    color: white;
  }
`;

