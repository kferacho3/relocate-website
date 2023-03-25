import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const LocationsContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;   
    height: 801px;
    background: #376392;
    width: 100vw;
    overflow: hidden;
    border-radius: 0px;
 
  
  @media screen and (max-width: 550px) {
    top: -200px;
    }
    
`;
export const LocationsHeaderContainer = styled.div`
    width: 100vw;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);

`

export const LocationsHeaderText = styled.h1`
    position: absolute;
    width: 946px;
    height: 174px;
    left: 283px;
    top: 9px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 87px;
    text-align: center;

    color: #FFFFFF;

    border: 0.2px solid #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const LocationsDemographicContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 800px;
  
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`

export const LocationsDemoHeader = styled.h2`
    position: absolute;
    width: 946px;
    height: 174px;
    left: 50%;
    transform: translateX(-50%);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 87px;
    text-align: center;

    color: #000000;

    border: 1px solid #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);`

export const LocationsDemoImg = styled.div`
    position: absolute;
    width: 1512px;
    height: 413px;
    left: 0px;
    top: 350px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`
export const LocationsBg = styled.div`
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
/*
export const LocationsContainer = styled.div`
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

export const LocationsContainer1 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#660099')};

    @media screen and (max-width: 768px) {
        padding: 150px 0;
    }
`;

export const LocationsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const LocationsRow = styled.div`
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
    grid-area: col2;
    
`;


export const TextWrapper = styled.div`
    max-width: 540;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
 

    width: 154px;
    height: 39px;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */


    color: #69F490;
`;

export const Heading = styled.h1`
 
    width: 276px;
    height: 87px;
  

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 87px;
    text-align: center;

    color: #FFFFFF;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    width: 502px;
    height: 191px;
    left: 790px;
    top: 400px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #D2D5DA;
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
    max-width: 555px;
    height: 100%;
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

export const LocationsInfoSection = styled.div`
    position: relative;
    width: 1512px;
    height: 835px;
    left: 0px;

    background: #376392;
`

export const LocationsInfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const LocationsInfoRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    } 
`;
export const LocationsInfoHeader = styled.div`
    position: absolute;
    width: 631px;
    height: 44px;
    left: calc(50% - 631px/2 - 5.5px);
    top: 52px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30.704px;
    line-height: 44px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #CEE9D2;
`
export const LocationsInfoTextSection = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 386px;
    height: 489px;
    left: 1079px;
    top: 228px;

    background: linear-gradient(180deg, #BAFCBA 0%, #CCFFCC 18.23%, #BDFFBD 58.85%, #5BFF5B 100%);
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

`
export const LocationsInfoIcon = styled.div`
    position: absolute;
    width: 493px;
    height: 141px;
    left: -45px;
    top: 14px;
`
export const LocationsInfoTextHeader = styled.p`
    position: absolute;
    width: 267px;
    height: 31px;
    left: calc(50% - 267px/2 - 0.5px);
    top: 170px;

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
`
export const LocationsInfoText = styled.p`

    position: absolute;
    width: 316px;
    height: 146px;
    left: calc(50% - 316px/2 - 3px);
    top: 225px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`
export const LocationsInfoButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;

    position: absolute;
    width: 247px;
    height: 63px;
    left: calc(50% - 247px/2 - 0.5px);
    top: calc(50% - 63px/2 + 191px);

    background: linear-gradient(180deg, #279F85 0%, #3965C8 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 80px;
`
export const LocationsInfoBg = styled.div`
    position: absolute;
    width: 525.54px;
    height: 624.69px;
    left: 0px;
    

`