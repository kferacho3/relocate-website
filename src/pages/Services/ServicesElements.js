import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const ServicesContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;    
    height: 1200px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#376392')};
 
 
  
  @media screen and (max-width: 550px) {
    top: -200px;
    }
    
`;

export const ServicesBg = styled.div`
  
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
   

    height: 1200px;
    right: 0px;
    top: 0px;
    @media screen and (max-width: 850px) {
        
    }
`
/*
export const ServicesContainer = styled.div`
    color: #fff;
    margin-top: 75px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#010606')};

    @media screen and (max-width: 640px) {
        padding: 50px 0;
        height: 150vh;
        margin: auto;
        margin-top: 75px;
    }
`;*/
export const ServicesTextContainer = styled.div`
    width: 545px;
    height: 513px;
    left: 876px;
    top: 234px;
    overflow: hidden;
    background: linear-gradient(180deg, #A4FFA4 0%, #C5FCC5 17.71%, #4CFF4C 71.87%, #4CC24C 90.62%);
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`
export const ServicesLogo = styled.img`
width: 100%;


`

export const ServicesLogoWrap = styled.div`
    width: 172px;
    height: 131px;
    margin-left: 50%;
    transform: translateX(-50%);
    zoom: 0.7;

`
export const ServicesDeco1 = styled.img`
  
    width: 144px;
    height: 55px;
    margin-top: 20px;
    margin-left: -20px;

    transform: matrix(1, 0, 0, -1, 0, 0);
`
export const ServicesDeco2 = styled.img`
  
    width: 159px;
    height: 60px;
    margin-left: 410px;
    //margin-right: -20px;
    margin-top: -30px;

    transform: matrix(1, 0, 0, -1, 0, 0);
`

export const DivBg = styled.img`
   
    width: 700px;
    height: 620px;
  justify-content: center;
  margin-left: -75px;
  margin-top: -55px;
 position: absolute;
    z-index: -9999999;
    transform: ${({divStart}) => (divStart ? `scaleX(-1)` : `scaleX(1)`)};
 
`

export const ServicesButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;
    white-space: nowrap;

    width: 270px;
    height: 63px;
    margin-left: 50%;
    transform: translateX(-50%);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.248px;

    color: #FFFFFF;

    background: linear-gradient(180deg, #279F85 0%, #3965C8 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
`
export const ServicesContainer1 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#660099')};

    @media screen and (max-width: 768px) {
        padding: 150px 0;
    }
`;

export const ServicesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const ServicesRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
 
    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    zoom: 0.85;
    grid-area: col2;
    
`;


export const TextWrapper = styled.div`
align-items: center;
text-align: center;
    max-width: 540;

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
    
    width: 267px;
    height: 31px;
    margin-left: 50%;
    transform: translateX(-50%);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    /* or 94% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    width: 449px;
    height: 122px;
    margin-top: -10px;
    margin-left: 50%;
    transform: translateX(-50%);
    

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
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
    width: 704.04px;
    height: 554px;
    zoom: 0.85;
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

