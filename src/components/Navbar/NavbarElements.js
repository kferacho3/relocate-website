import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import "./Navbar.scss";


export const Nav = styled.nav`
   
    height: 120px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 9999999999;
    margin-bottom: 80px;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    height: 120px;
    z-index: 1;
    width: 100%;
    
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
    
    margin-right: -75px;
    white-space: nowrap;
    padding: 20px 80px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 30px;
    /* or 429% */
    margin-left: -50px;
    display: flex;
    align-items: center;
    letter-spacing: 0px;
    text-decoration: none;
    color: #222222;
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

export const NavBottomText2 = styled.p`
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

    &:hover {
        color: #218207;
        background: linear-gradient(180deg, rgba(0, 255, 1, 0.5) 57.29%, rgba(43, 211, 222, 0) 100%);
        //border: 2px solid #69F490;
        border-radius: 80px;
        width: 100%;
        height: 30%;
      
    }
    &:active {
        color: #218207;
        border: 2px solid #69F490;
        border-radius: 80px;
        width: 150%;
        height: 30%;
    }


`;

export const NavIcon = styled.div`
    width: 25px;
    height: 24px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
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

