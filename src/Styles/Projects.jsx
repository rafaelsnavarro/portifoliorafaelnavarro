import styled from "styled-components";

export const Projeto1 = styled.img`
    width:300px;
    border-radius:10px 10px 10px 10px;
    height:250px;
    object-fit: cover;
`
export const Titulo1 = styled.h2`
    color:#B22222;
    margin-left: 8vh;
@media(max-width: 768px){
    color:#B22222
}
`

export const Container = styled.div`
    display:flex;
    width:100%;
    height:30vw;
    flex-wrap:wrap;
    justify-content:space-around;
    margin-top:2rem;
@media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    }
`
export const Paragrafo = styled.p`
    border:solid black;
    width:28vh;
    font-weight:800
`