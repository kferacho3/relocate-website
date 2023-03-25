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
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    
`;


export const NavLogoCont = styled.div`
    height: 160px;
    width: 240px;
    display: flex;
    align-items: center;
    width: 235px;
height: 49px;


filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 870px)  {
        margin-left: -20px;
        zoom: 0.8;
       
    }


`
export const NavLogo = styled(LinkR)`

    height: 100%;
    width: 100%;
    padding: 20px 80px;
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
    font-family: Lato;
    
            
    
@media screen and (max-width: 1350px) {
    transform: scale(0.9) translateX(-100px);
}
@media screen and (max-width: 1150px) {
    transform:scale(0.85) translateX(-150px);
}
@media screen and (max-width: 950px) {
    transform: scale(0.7) translateX(-200px);
}

    @media screen and (max-width: 870px) {
       display: none;
    }
`;

export const NavItem = styled(LinkS)`
    
    height: 100%;
    width: 100%;
    margin-right: -100px;
    white-space: nowrap;
    padding: 10px 80px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 25px;
    /* or 429% */

    display: flex;
    align-items: center;
    letter-spacing: 1px;
    text-decoration: none;
    color: #222222;
    transition: all 0.2s ease-in-out;
   
  
    &:hover {
        color: #8B9F2C;
      
    }
    &:active {
        color: #8B9F2C;
    }
    
     
`;

export const NavBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 476.908px 8px 477.092px;

    position: absolute;
    height: 15px;
    width: 100vw;
    top: 90px;

    background: #F5F7F9;

`
export const NavBottomText = styled.p`
    width: 250px;
    height: 0px;
    margin-top: 7.5px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 13.5008px;
    line-height: 28px;
    /* identical to box height, or 207% */
    margin-left: 85px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #376392;
`
export const NavLinks = styled(LinkR)`
    
    width: 69px;
    height: 28px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    /* identical to box height, or 187% */

    display: flex;
    align-items: center;

    color: #376392;
    text-decoration: none;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px -0.264063px;
    &:hover {
        color: #8B9F2C;
        text-decoration: underline;
      
    }
    &:active {
        color: #8B9F2C;
        text-shadow: 5px 5px #FFF;
        text-decoration: underline;
    }

    @media screen and (max-width: 1350px) {
    font-size: 1.75rem;
}

@media screen and (max-width: 850px) {
        font-size: 1.5rem;

    }
`;

export const NavBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 46px 18px 24px;
    isolation: isolate;

    height: 45px;
    margin-right: 35px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    background: #218207;
    border-radius: 80px;
    
    @media screen and (max-width: 990px) {
        transform: scale(0.70) translateX(-120px) translateY(20px);
       
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14.5008px;
    line-height: 28px;
    outline: none;
    border: none;
    cursor: pointer;
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

