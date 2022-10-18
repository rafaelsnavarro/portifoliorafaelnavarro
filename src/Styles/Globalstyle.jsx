import { createGlobalStyle } from "styled-components";
import Bodi from "../Assets/Body/download.jfif";
import Responsivo1 from "../Assets/Body/download1.jpg";

export const Globalstyle = createGlobalStyle`
*{
  
    margin:0;
    padding:0;
    box-sizing:0;
    background-image:url(${Bodi});
       background-repeat:no-repeat;
       background-position:center;
       background-attachment:fixed;
       background-size:100%;
       @media screen and (max-width: 1024px){
        background-image:url(${Responsivo1});
        background-size:100%;
    
       }
       @media screen and (max-width: 972px){
        background-image:url(${Responsivo1});
        background-size:100%;
    
       }

       @media screen and (max-width: 768px){
        background-image:url(${Responsivo1});
        background-size:100%;
    
       }
       
       @media screen and (max-width: 375px){
        background-image:url(${Responsivo1});
        background-size:100%;
       
       
    
}
}
`;
