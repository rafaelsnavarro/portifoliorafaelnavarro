import styled from "styled-components";

export const ContainerM = styled.main`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const TextBox = styled.div`
  max-width: 560px;
`;

export const Subtitle = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Button = styled.a`
  color: #ffffff;
  text-decoration: none;
  border: 1px solid #ffffff;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Foto = styled.img`
  width: 320px;
  height: 420px;
  object-fit: cover;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 260px;
    height: 340px;
  }
`;

export const Footer = styled.ul`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  padding: 0;

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ReactIcons = styled.li`
  list-style: none;
  font-size: 2rem;
`;

export const Links = styled.a`
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Techs = styled.p`
  color: #b22222;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;