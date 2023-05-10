import styled from 'styled-components';

export const ServicesContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #fff;    
    height: 1000px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#376392')};
 
 
    @media screen and (max-width: 768px) {
        
        height: 1100px;  
      }
 
    
`;






export const ServicesTextContainer = styled.div`
    width: 525px;
    height: 525px;
   
    overflow: hidden;
    background: linear-gradient(180deg, #A4FFA4 0%, #C5FCC5 17.71%, #4CFF4C 71.87%, #4CC24C 90.62%);
   // border: 0.25px solid #000000;
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
    margin-top: -50px;

`
export const ServicesDeco1 = styled.img`
  
    width: 144px;
    height: 55px;
    margin-top: 20px;
    margin-left: -25px;

    transform: matrix(1, 0, 0, 1, 0, 0);
`
export const ServicesDeco2 = styled.img`
  
    width: 159px;
    height: 60px;
    margin-left: 400px;
    //margin-right: -20px;
    margin-top: -25px;

    transform: matrix(1, 0, 0, 1, 0, 0);
`

export const DivBg = styled.img`
   
    overflow: hidden;
    width: 700px;
    height: 620px;
    justify-content: center;
    margin-left: -75px;
    margin-top: -55px;
    position: absolute;
    z-index: -9999999;
    transform: ${({divStart}) => (divStart ? `scaleX(-1)` : `scaleX(1)`)};
    @media screen and (max-width: 768px) {
        
       margin-top: 0px;
       margin-left: 0px;
       
    }

  
 
`

export const ServicesButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;
    white-space: nowrap;

    width: 275px;
    height: 50px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 65px;
    cursor: pointer;
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
    border-radius: 80px;
    border: none;

    &:hover {
        opacity: calc(.7);
        transition: all 100ms ease-in-out;
}
`


export const ServicesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 800px;  
        }

`;

export const ServicesRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 100px;
        grid-template-areas: 'col2' 'col1';   
        }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
 
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
        display: flex;
       align-items: center;
       padding: 0%;
       justify-content: center;
        zoom: 0.65;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.85;
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
        padding: 0%;
        margin-bottom: -200px;
       
    }
`;


export const TextWrapper = styled.div`
align-items: center;
text-align: center;
    max-width: 540px;

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
    white-space: nowrap;
   
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 50px;
    /* or 94% */

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #000000;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    width: 450px;
    height: 122px;
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    


    font-style: normal;
    font-weight: 700;
    font-size: 16.5px;
    line-height: 24px;
    /* or 133% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
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

