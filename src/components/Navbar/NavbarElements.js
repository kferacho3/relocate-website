import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import "./Navbar.scss";


export const Nav = styled.nav`
   
    height: 120px;
    width: 100vw;
    display: block;
    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  
    z-index: 99999999999;
    margin-bottom: 120px;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
 
    display: flex;
    justify-content: space-between;
    height: 120px;
    overflow: hidden;
    width: 100%;
    z-index: 9999999;
    overflow: hidden;
    position: absolute;
`;


export const NavLogoCont = styled.div`
    margin-top: 2%;
    margin-left: 60px;
    display: flex;
    align-items: center;
    width: 190px;
    height: 40px;
    cursor: pointer;


    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   
    background-repeat: no-repeat;
    background-size: cover;
    
    @media screen and (max-width: 870px)  {
        margin-left: 50px;
        zoom: 0.8;
        margin-top: 35px;
    }


`
export const NavLogo = styled(LinkR)`

    height: 100%;
    width: 100%;
    justify-self: flex-start;
    cursor: pointer;
    
    display: flex;
    align-items: center;
  
 
    
    &:hover {
        
    }
    @media screen and (max-width: 1350px) {
    transform: scale(0.9) translateX(-80px);
}
@media screen and (max-width: 1150px) {
    transform:scale(0.85) translateX(-100px);
}
@media screen and (max-width: 950px) {
    transform: scale(0.8) translateX(-240px);

}
    @media screen and (max-width: 870px)  {
        margin-left: -20px;
       
    }
    
`;

export const MobileIcon = styled(LinkR)`
   display: none;
   z-index: 999999;
   
    @media screen and (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        font-size: 2.8rem;
        cursor: pointer;
        color: #000;
        }   
    `;

export const NavMenu = styled.ul`

    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    height: 80px;
    transform: translateX(-100px);
 

        
@media screen and (max-width: 1350px) {
    transform: scale(0.9);
}
@media screen and (max-width: 1150px) {
    transform:scale(0.7);
}
@media screen and (max-width: 950px) {
    transform: scale(0.7) translateX(-200px);
}

    @media screen and (max-width: 870px) {
       display: none;
    }
            

`;

export const NavItem = styled.p`
    position: relative;
    margin-right: -75px;
    white-space: nowrap;
    padding: 20px 55px;
    font-style: normal;
    height: 120px;
    margin-bottom: 40px;
    width: calc(100% + 50px);
    /* or 429% */
   // margin-left: -60px;
    display: flex;
    align-items: center;
    letter-spacing: 0px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
   
  
    &:hover {
        color: #218207;
      
    }
    &:active {
        color: #218207;
    }
    
     
`;

export const NavBottom = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'col1 col2';
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    position: absolute;
    height: 30px;
    width: 100vw;
    top: 90px; 
    background: #F5F7F9;

`
export const NavBottomText = styled.p`
    width: 500px;
    height: 20px;
    margin-top: -10px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 700;
    font-size: 13.5008px;
    line-height: 28px;
    text-align: center;
    justify-content: center;
    /* identical to box height, or 207% */
    //margin-left: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    grid-template-areas: col1;
    color: #376392;
    @media screen and (max-width: 870px) {
      justify-content: center;
      text-align: center;
      font-size: 10px;
  }
  
`

export const NavBottomText2 = styled(LinkR)`
    width: 500px;
    height: 20px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 700;
    font-size: 13.5008px;
    line-height: 28px;
    text-align: center;
    justify-content: center;
    grid-template-areas: col2;
    text-decoration: none;
   // margin-left: -50px;
    cursor: pointer;
    /* identical to box height, or 207% */
   
    display: flex;
    align-items: center;
    text-align: center;

    color: #218207;
    @media screen and (max-width: 870px) {
        margin-left: -150px;
        font-size: 10px;
    }
  
`
export const NavBottomTextSection = styled.p`
        position: absolute;
        margin-left: 50%;
        transform: translateX(-50%);
    @media screen and (max-width: 870px) {
        transform: translateX(-32.5%);
        justify-content: center;
        text-align: center;

    }
`
export const NavLinks = styled(LinkR)`
    
    height: 28px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* identical to box height, or 187% */
    display: flex;
    align-items: center;

    color: #376392;
    text-decoration: none;
    z-index: 99999;
    &:hover {
        color: #218207;
        
        background: linear-gradient(180deg, rgba(0, 255, 1, 0.5) 57.29%, rgba(43, 211, 222, 0) 100%);
        border-radius: 50px;
        text-decoration: none;
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        //border: 2px solid #69F490;
        opacity: calc(.8);
        transition: all 0.2s ease-in-out;
       // transition: all 280ms ease-in-out;
       // border-radius: 80px;
        //width: 130px;
        width: calc(100% + 100px);
        height: 30%;
      
    }
    &:active {
        color: #218207;
        transition: all 30ms ease-in-out;
        border: 1px  #69F490;
       
        border-radius: 80px;
        width: 150%;
        height: 30%;
    }


`;

export const NavIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 7.5px;
    z-index: 9999;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    cursor: pointer;
    /* identical to box height, or 187% */
    display: flex;
    align-items: center;

    color: #376392;
    text-decoration: none;



`;

export const NavBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 46px 18px 24px;
    isolation: isolate;
    cursor: pointer;
    height: 45px;
    margin-right: 35px;
   
    border: none;
    /* identical to box height, or 100% */

    margin-left: 10px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    background: #218207;
    border-radius: 80px;
    
    &:hover{
        opacity: 0.7;
    }
 
    @media screen and (max-width: 870px) {
        display: none;
    }
`;

export const NavNumber = styled(LinkR)`
  
    display: flex;
    align-items: center;

    color: #218207;
    white-space: nowrap;
    padding: 10px 20px;
    margin-left: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 14.5008px;
    line-height: 28px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 50px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 9999;
    &:hover {
       // background-image: url('./images/chest2.png');
        
    }

`;

export const NavBtnBG = styled.div`
    padding: 20px 22px;
    margin-left: -40px;
    margin-top: 20px;
    width: 300px;
    height: 300px;
    position: absolute;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-image: url('./images/rainbow.png');
    background-position: center;
    background-size: cover;
    transform: scale(7) translateX(14.5px);

   
`;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Nav Bottom 2                                                                                            ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const NavBottom2 = styled.div`
   

    overflow: hidden;
    position: absolute;
    height: 60px;
    width: 100vw;
    top: 80px; 
    background: #6994F4;

`

export const NavBtnWrap = styled.div`
    position: absolute;
    margin-left: 50%;
    transform: translateX(-50%);
    display: grid;
    margin-top: 5px;
    gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'btn1 btn2 btn3';

`
export const NavBotBtn = styled.button`
    box-sizing: border-box;
    grid-area: btn1;
    width: 300px;
    height: 30px;

    top: 5px;
   // border-image-source: linear-gradient(180deg, #218207 0%, rgba(0, 255, 1, 0.5) 100%);
    background: #F1EFFF;
    border-radius: 4px;
   

    /* Inside auto layout */
    text-align: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }

`
export const NavBotBtn2 = styled.button`
    box-sizing: border-box;
    grid-area: btn2;
    width: 300px;
    height: 30px;
    top: 5px;
    //border-image-source: linear-gradient(180deg, #218207 0%, rgba(0, 255, 1, 0.5) 100%);
    background: #F1EFFF;
    border-radius: 4px;

    /* Inside auto layout */
    text-align: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }

`
export const NavBotBtn3 = styled.button`
    box-sizing: border-box;
    grid-area: btn3;
    width: 300px;
    height: 30px;

    background: #F1EFFF;
    border-radius: 4px;

    /* Inside auto layout */
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    justify-content: center;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;

    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }


`


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Nav Bottom 3                                                                                            ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const NavBottom3 = styled.div`
   

    overflow: hidden;
    position: absolute;
    height: 80px;
    width: 100vw;
    top: 80px; 
    background: #6994F4;
`

export const NavBtnWrap2 = styled.div`
    position: absolute;
    margin-left: 50%;
    transform: translateX(-50%);
    display: grid;
    margin-top: 5px;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 'btn1 btn2 btn3 btn4 btn5';

`
export const NavPacker = styled(LinkR)`
    box-sizing: border-box;
    grid-area: btn1;
    width: 175px;
    height: 30px;  
    border-radius: 10px;

    top: 5px;
   // border-image-source: linear-gradient(180deg, #218207 0%, rgba(0, 255, 1, 0.5) 100%);
    background: #F1EFFF;
   
   

    /* Inside auto layout */
    text-align: center;
    justify-content: center;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    text-decoration: none;
    line-height: 16px;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }

`
export const NavDriver = styled(LinkR)`
    box-sizing: border-box;
    grid-area: btn2;
    width: 175px;
    height: 30px;  
    border-radius: 10px;
    top: 5px;
    //border-image-source: linear-gradient(180deg, #218207 0%, rgba(0, 255, 1, 0.5) 100%);
    background: #F1EFFF;
   

    /* Inside auto layout */
    text-align: center;
    justify-content: center;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    text-decoration: none;
    line-height: 16px;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }

`
export const NavHandman = styled(LinkR)`
    box-sizing: border-box;
    grid-area: btn3;
    width: 175px;
    height: 30px;  
    border-radius: 10px;

    background: #F1EFFF;


    /* Inside auto layout */
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    text-decoration: none;
    line-height: 16px;
    text-align: center;
    justify-content: center;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;

    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }


`
export const NavPackman = styled(LinkR)`
    box-sizing: border-box;
    grid-area: btn4;
    width: 175px;
    height: 30px;  
    border-radius: 10px;
    background: #F1EFFF;
 

    /* Inside auto layout */
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    text-decoration: none;
    line-height: 16px;
    text-align: center;
    justify-content: center;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;

    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }


`
export const NavCarrier = styled(LinkR)`
    box-sizing: border-box;
    grid-area: btn5;
    width: 175px;
    height: 30px;  
    border-radius: 10px;

    background: #F1EFFF;

    /* Inside auto layout */
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 16px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;

    transition: background 0.5s ease;

  &:hover {
        color: #218207;
        --c: #98FB7D; /* the color */
  
        //color: #0000;
        
        background: 
            linear-gradient(90deg,#69E969 50%,var(--c) ) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100%;

        //background: linear-gradient(180deg, #69E969 100%, #98FB7D 50%);
        transition: 0.5s;
    }
    &:hover:hover{
        --_p: 100%
    }


`