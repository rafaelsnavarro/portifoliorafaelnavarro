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
  object-fit: cover;
  border-radius: 12px;
  border: solid black 2px;

  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
  }
`;

export const Div = styled.div`
  width: 80%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Paragrafo = styled.p`
  font-family: "Montserrat", sans-serif;
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 300;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
`;

