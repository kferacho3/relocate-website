import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const JoinPackContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F0F8FF;    
    height: 1500px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;

 
  
 
    
`;







export const PackContainer = styled.div`
       display: flex;
    justify-content: center;
    align-items: center;
    background: #F0F8FF;    
    height: 1200px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;
    overflow: hidden;
    //background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#010606')};

  
`;



export const PackWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;


`;

export const PackRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

 
@media screen and (max-width: 768px) {
    grid-auto-columns: 1fr;
    gap: 400px;
    grid-template-areas: 'col1' 'col2';   
    }

`;

export const PackBanner = styled.div`
   

    width: 100vw;
    height: 300px;
    margin-top: -550px;
    position: absolute;

    background: #E2E6E3;
    @media screen and (max-width: 768px) {
        height: 150px;
        margin-top: -330px;
    }



`
export const PackLogoWrap = styled.div`
    width: 100px;
    height: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
`
export const PackLogo = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`
export const PackName = styled.img`
    width: 100%;
    height: 100%;
    margin-top: -140px;
`

export const PackNameWrap = styled.div`

    width: 700px;
    height: 350px;

`

export const PackTextContainer = styled.div`
   
    width: 662px;
    height: 377px;
    margin-bottom: -125px;
    overflow: hidden;
    background: linear-gradient(180deg, #C3F8D1 0%, #67DD68 28.65%, #38D538 63.54%, #00BB01 99.99%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

export const PackDeco1 = styled.img`
  
    width: 150px;
    height: 55px;
    margin-top: 20px;
    margin-left: -45px;
    top: 69px;
    

    transform: matrix(1, 0, 0, -1, 0, 0);
`

export const PackDeco2 = styled.img`

    width: 150px;
    height: 60px;
    margin-left: 558px;
    margin-top: -75px;

    transform: matrix(1, 0, 0, -1, 0, 0);
`
export const PackDivBg = styled.img`
   
    width: 775px;
    height: 600px;
    margin-top: -100px;
    margin-left: -50px;
    z-index: -999;
    justify-content: center;

    position: absolute;
    transform: ${({divStart}) => (divStart ? `scaleX(1)` : `scaleX(-1)`)};
`
export const PackButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;

    width: 260px;
    height: 63px;
    left: calc(50% - 260px/2);
    top: calc(50% - 63px/2 + 124px);

    background: linear-gradient(180deg, #16BC97 0%, #0044DC 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
`


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    z-index: 1;
    grid-area: col1;
    @media screen and (max-width: 768px) {
    
    
        margin-left: 50%;
        transform: translateX(-50%) scale(0.5);
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
 
    z-index: 1;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        
        justify-content: center;
        align-items: center;
        margin-top: -500px;
        margin-left: 50%;
        transform: translateX(-38%) scale(0.7);
    }
`;


export const TextWrapper = styled.div`
    max-width: 540;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
    color: #660099;
    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    width: 562px;
    height: 160px;
    margin-top: -10px;
    margin-left: 50%;
    transform: translateX(-50%);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    /* or 133% */

    display: flex;
    align-items: center;

    color: #424B5A;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 640px) {
        align-items: center;
    
    display:block;
      
    margin: auto;
    }
    
`

export const ImgWrap = styled.div`
    width: 446.7px;
    height: 677px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    

`;

export const Img1 = styled.img`
    width: 100%;
    height: 100%;
    
    margin: 0 0 10px 0;
    padding-right: 0;
`;