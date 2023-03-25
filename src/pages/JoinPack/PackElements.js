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
 
  
  @media screen and (max-width: 550px) {
    top: -200px;
    }
    
`;

export const JoinPackBg = styled.div`
    position: absolute;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  
    
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;

    }
  
  @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      zoom: 0.5;
    }

`;





export const Col1 = styled.div`
    position: relative;
    height: 1200px;
    left: 100px;
    top: 0px;
    margin-bottom: 200px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    
 
  
  @media screen and (max-width: 850px) {
      left: 50%;
      transform: translateX(-35%);
    
    }
       @media screen and (max-width: 850px) {
      
    }
`

export const Col2 = styled.div`
    position: relative;

    height: 1200px;
    right: 0px;
    top: 0px;
    @media screen and (max-width: 850px) {
        
    }
`

export const PackContainer = styled.div`
    color: #fff;
    margin-top: 75px;
    //background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#010606')};

    @media screen and (max-width: 640px) {
        padding: 50px 0;
        height: 150vh;
        margin: auto;
        margin-top: 75px;
    }
`;

export const PackContainer1 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#660099')};

    @media screen and (max-width: 768px) {
        padding: 150px 0;
    }
`;

export const PackWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;


`;

export const PackRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const PackBanner = styled.div`
   

    width: 100vw;
    height: 300px;
    margin-top: 80px;
   position: absolute;

    background: #E2E6E3;

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
    margin: 0 0 80px 0;
    padding-right: 0;
`

export const PackTextContainer = styled.div`
   
    width: 662px;
    height: 377px;
    left: 757px;
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
export const PackDivBg = styled.div`
   
    width: 700px;
    height: 620px;
  position: absolute;
    transform: ${({divStart}) => (divStart ? `scaleX(-1)` : `scaleX(1)`)};
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
    z-index: 1;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    z-index: 1;
    padding: 0 15px;
    grid-area: col2;
    
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
    width: 500px;
    height: 708.07px;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;

export const Img1 = styled.img`
    width: 100%;
    height: 100%;
    
    margin: 0 0 10px 0;
    padding-right: 0;
`;