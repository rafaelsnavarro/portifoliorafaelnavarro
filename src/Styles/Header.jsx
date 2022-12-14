import { Link } from "react-router-dom";
import styled from "styled-components";

export const CaixaM = styled.div`
display:flex;
  justify-content: space-between;
  @media screen and(max-width:768px) {
    width: 30%;
    height: 80%;
    color: white;
    font-size: 10px;
    flex-direction: column-reverse;
  }
`;
export const Listinha = styled.li`
  display: flex;
  align-items:center;
  list-style: none;
  justify-content:center;
  width: 200px;
  font-size: 1.5rem;
  text-decoration: none;
  @media (max-width: 768px) {
    width:100px;
    align-items:center;
    justify-content:center;
    font-size:20px;
  }
`;
export const Listas = styled(Link)`
  list-style: none;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 150px;
  color: white;
  text-decoration: none;

  :hover {
    transition: ease-out 0.5s;
    color: red;
  }
  @media screen {
   margin-right: 18vh;
  }
`;

export const Img2 = styled.img`
  width: 150px;
  margin-left: 2rem;
  @media (max-width: 768px) {
    display:none;
  }
`;
export const Navp = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content:flex-end;
  
  @media (max-width: 768px) {
    display:none;
    

  }
`;
export const Burguir = styled.img`
  border: solid;
  width:50px;
`;

export const Menu = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    font-size:15px;
   
  }
`;
export const Teste = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content:center;
    align-items:center;
  }
`;
