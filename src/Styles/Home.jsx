import styled from "styled-components";

export const ContainerM = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

export const H1P = styled.h1`
  color: white;
  animation: typing 4s 1s normal steps(48) both, blink 500ms infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 5px solid;
  font-family: monospace;
  font-size: 1.5rem;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 23em;
    }
  }
  @keyframes blink {
    from {
      border-right: 5px solid;
    }
    to {
      border-color: transparent;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 1.3rem;
    color: white;
  }
`;

export const Caixa3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  justify-content: center;
  align-items: center;
`;

export const Foto = styled.img`
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 9vh;
  margin-bottom: 9vh;

  border-radius: 10px 10px 10px 10px;
  @media (max-width: 768px) {
    width: 250px;
    height: 350px;
    margin-top: 19vh;
    margin-bottom: 20vh; 
  }
`;
export const Footer = styled.ul`
  display: flex;
`;
export const ReactIcons = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 80px;
  font-size: 30px;
  text-decoration: none;
`;

export const Links = styled.a`
  text-decoration: none;
  color: white;
`;
