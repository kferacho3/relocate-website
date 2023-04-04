import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const LocationsContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;   
    height: 1000px;
    background: #376392;
    width: 100vw;
    overflow: hidden;
    border-radius: 0px;
  
    @media screen and (max-width: 768px) {
        
        height: 800px;
    }
 
  
  @media screen and (max-width: 550px) {
   
    }
    
`;
export const LocationsHeaderContainer = styled.div`
    width: 100vw;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);

`

export const LocationsHeaderText = styled.h1`
    
    width: 946px;
    height: 174px;
    left: 283px;
    top: 9px;

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
   
   overflow: hidden;
    width: 100vw;
    height: 800px;
    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media screen and (max-width: 550px) {
   height: 400px;
}
`

export const LocationsDemoHeader = styled.h2`
  
    width: 946px;
    height: 174px;
    margin-left: 50%;
    transform: translateX(-50%);

    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 87px;
    text-align: center;

    color: #000000;

    //border: 1px solid #FFFFFF;
    //text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        zoom: 0.5;
   }
    `

export const LocationsDemoImg = styled.img`
   
    width: 100%;
    height: 413px;
    left: 0px;
    top: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media screen and (max-width: 550px) {
        margin-top: -100px;
}
`









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
        gap: 100px;
        grid-auto-columns: 1fr;
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        zoom: 0.75;
   }
`;

export const Column2 = styled.div`
    
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        zoom: 0.7;
   }
    
`;
export const Column22 = styled.div`
    margin-bottom: 115px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        zoom: 0.75;
        margin-bottom: 15px;
   }
    
`;
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
    @media screen and (max-width: 768px) {
        zoom: 0.75;
   }
    
`;


export const TextWrapper = styled.div`
    max-width: 540;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
 

    width: 154px;
    height: 39px;
  
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
  

    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 87px;

    color: #FFFFFF;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    width: 502px;
    height: 191px;


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
   width: 544px;
height: 689px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
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
  
    overflow: hidden;
    width: 100vw;
    height: 835px;
    background: #376392;
    
    @media screen and (max-width: 768px) {
        height: 1800px;
   }
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
    gap: 75px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};
    z-index: 999;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
        margin-left: 50%;
        transform: translateX(-100%);
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3'`)};
    } 
`;
export const LocationsInfoHeader = styled.h2`
 
    width: 631px;
    height: 44px;
    margin-left: 50%;
    transform: translate(-50%, 20px);

    font-style: normal;
    font-weight: 400;
    font-size: 30.704px;
    line-height: 44px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #CEE9D2;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
   }
`
export const LocationsInfoTextSection = styled.div`
    box-sizing: border-box;
    width: 386px;
    height: 489px;
    background: linear-gradient(180deg, #BAFCBA 0%, #CCFFCC 18.23%, #BDFFBD 58.85%, #5BFF5B 100%);
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  

`
export const LocationsInfoIcon = styled.img`
    
    width: 100%;
    height: 100%;
    

`
export const LocationsInfoIconWrap = styled.div`
width: 101px;
height: 105px;
margin-left: 50%;
    transform: translateX(-50%);


`
export const LocationsInfoTextHeader = styled.p`
   
    height: 31px;
    white-space: nowrap;
    margin-left: 50%;
    transform: translateX(-50%);

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    /* or 94% */

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: #000000;
`
export const LocationsInfoText = styled.p`

    width: 316px;
    height: 146px;
    margin-left: 50%;
    transform: translateX(-50%);

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
    
    margin-left: 50%;
    transform: translateX(-50%);
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    white-space: nowrap;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.248px;

    color: #FFFFFF;
    width: 247px;
    height: 63px;


    background: linear-gradient(180deg, #279F85 0%, #3965C8 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 80px;
`
export const LocationsInfoBg = styled.img`
    position: absolute;
    justify-content: center;
    margin-left: -60px;
    margin-top: -70px;
    z-index: -1;
    width: 525.54px;
    height: 624.69px;
    

`