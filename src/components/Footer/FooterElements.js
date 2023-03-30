import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

import {Link as LinkR} from 'react-router-dom';

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 2rem 0;
    top: 0;
    left: 0;
    overflow: hidden;
    background: #FFFFFF;
    position: relative;

  
  @media screen and (max-width: 850px) {
    
    height: 200px;
    }
    
  
    
    
`;
export const FooterMainContainer = styled.div`
    margin-top: -50px;
    @media screen and (max-width: 1400px) {
       transform: scale(0.9);
    }
  
  
  @media screen and (max-width: 1200px) {
    transform: scale(0.7);
    }
  
  @media screen and (max-width: 850px) {
    
    transform: scale(0.3);
    }
`

export const FooterWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const FooterRow = styled.div`
    display: grid;
    grid-auto-columns: 0.5fr 1fr 0.5fr;
    gap: 100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3'`)};
    }
`;


export const FooterLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 265px;
    width: 250px;
    gap: 25px;
    left: 0px;

`
export const FooterTopLine = styled.hr`
    box-sizing: border-box;

    width: 1360px;
    height: 1px;
    top: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
export const FooterBottomLine = styled.hr`
    box-sizing: border-box;

    transform: matrix(1, 0, 0, -1, 0, 0);

    box-sizing: border-box;

    width: 1360px;
    height: 1px;
    top: 150%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const FooterLeftHead = styled.div`
   
    width: 258px;
    height: 19.23px;
    left: 59px;
  

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #218207;
`
export const FooterLeftAddress = styled.div`
    
    left: 6.64%;
    right: 72.16%;


    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    color: #242121;
`
export const FooterLeftNumber = styled.div`
   
    left: 6.64%;
    right: 85.14%;
  

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    color: #218207;
`
export const FooterLeftEmail = styled.div`
    
    left: 6.64%;
    right: 80.95%;


    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    color: #242121;
`
export const FooterLeftButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 46px 18px 24px;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;

    height: 40px;
    left: 59px;
    right: 1221px;

    background: #218207;
    border-radius: 80px;
`

export const FooterMidContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 0px 0px;
    gap: 25px;


    width: 500px;
    height: 265px;

`
export const FooterMidHead = styled.p`
`
export const FooterRightContainer = styled.div`
    
    width: 409px;
    height: 366px;
    right: 0px;
`
export const FooterLinksWrapper = styled.li`
    display: flex;
    flex-direction: column;


`;



export const FooterIconWrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 133px;
    left: 641px;
    top: 173px;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    

`
export const FooterIcon = styled(LinkR)`
    position: absolute;
    width: 366px;
    height: 339px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    


`

export const FooterText = styled(LinkR)`
    font-family: 'Roboto';
    color: #8B9F2C;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    white-space: nowrap;
    text-align: left;
    cursor: pointer;


`
export const FooterLinksContainer = styled.ul`
   
    align-items: center;
    justify-content: right;
    width: 100vw;

  


`;










export const FooterLinkTitle = styled.div`
    font-size: 2rem;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    font-family: 'Roboto';
    font-style: normal;
    white-space: nowrap;
    /* or 120% */

    display: flex;
    align-items: center;
    color: #2C2C2C;
    text-align: left;
    text-shadow: .5px .5px #8B9F2C;;
 
    
`;





export const FooterBottomSection = styled.div`
    display: flex;
    position: absolute;
    z-index: 99999;
    width: 100vw;
    height: 80px;
    margin-top: 450px;
    margin-left: 50%;
    @media screen and (max-width: 850px) {
    zoom: 0.5;
    margin-left: 0%;

    }
`


export const SocialMediaWrap = styled.div`

    display: flex;

   

 
`;

export const SocialLogo = styled.img`
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
  


    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        background-color: #4267B2;
        }
    
`;

export const SocialLogoWrap = styled(LinkR)`
    background-repeat: no-repeat;
    background-size: cover;
    height: 40px;
        margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  


    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        background-color: #4267B2;
        }
    
`;

export const FooterBottomLeftContainer = styled.div`

    width: 325px;
    height: 60px;
`

export const WebsiteRights = styled.small`
  
    width: 250px;
    height: 17px;
 
    white-space: nowrap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* or 177% */

    display: flex;
    align-items: center;

    color: #70767A;
   
`;

export const WebsiteTermsPolicy = styled.small`

    width: 47px;
    height: 17px;
    margin-top: 5px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 27px;
    /* or 177% */

    display: flex;
    align-items: center;

    color: #747C82;
`

export const SocialIconSection = styled.div`
   
    width: 420.56px;
    height: 38px;
    left: 0px;
 
`

export const SocialIconText = styled.div`
    position: absolute;
    left: 58%;
    right: 34.46%;
    top: 98.96%;
    bottom: 0.36%;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;

    color: #000000;
`

export const SocialIcon = styled.div`
    position: absolute;
    left: 67.66%;
    right: 30.34%;
    top: 98.97%;
    bottom: 0.44%;
`


export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  

 
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
  
`;

export const VizIco = styled.img`
    
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    display: flex;
    height: 250px;
    width: 250px;
    margin-bottom: 100px;
    transform: translate(90%, 30%);
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const VizSet = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    justify-content: center;
    grid-template-columns: 1fr 1fr;
    display: table-cell;
    vertical-align: middle;
    gap: 75px;
    align-items: center;
    

`;
