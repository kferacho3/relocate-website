import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
export const PackHeroHeroContainer = styled.div`
    
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
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#ffffff')};
 
 
    @media screen and (max-width: 768px) {
        //top: 100px;
        height: 1100px;  
      }
 
    
`;





export const PackHeroHeroButton = styled(LinkR)`
 

    padding: 20px 0px 0px 0px;
    white-space: nowrap;

    width: 500px;
    height: 50px;
    margin-top: 25px;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-family: "inter";
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */


    color: #FFFFFF;
    /* identical to box height */

    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    letter-spacing: 1.248px;

    background: linear-gradient(180deg, #00FF01 0%, #33CF09 100%);
    border-radius: 80px;
    border: none;
    
    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`


export const PackHeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 500px;  
        }

`;

export const PackHeroRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        position: absolute;
         margin-left: 50%;
        transform: translateX(-50%);
        gap: 200px;
        grid-template-areas: 'col2' 'col1';   
        }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
 
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        position: absolute;
       align-items: center;
     
       justify-content: center;
       width: 500px;
        zoom: 0.7;
        margin-left: 50%;
        transform: translateX(-50%);

    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.9;
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

    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
    font-style: normal;
    font-family: "inter";
    font-weight: 400;
    font-size: 14.5008px;
    line-height: 28px;
    justify-content: flex-start;
    /* or 193% */

    display: flex;
    align-items: center;

    color: #69F490;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    
    width: 600px;
    height: 31px;
   
    
   
    font-style: normal;
    font-family: "inter";
    font-weight: 100;
    font-size: 61.696px;
    line-height: 72px;
    margin-bottom: 50px;
    /* or 117% */

    display: flex;
    align-items: flex-start;

    color: #233152;
    /* or 94% */

    align-items: center;
    text-align: left;
    justify-content: left;

    color: #000000;
    @media screen and (max-width: 768px) {
      

     align-items: center;
   
     justify-content: left;
 

  }


`;

export const Subtitle = styled.p`
    
    width: 500px;
    height: 122px;
    margin-top: 10px;
    margin-bottom: 0px;

    


    font-style: normal;
    font-family: "inter";
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    /* or 133% */

    display: flex;
    align-items: flex-start;
    text-align: left;

    color: #000000;
    @media screen and (max-width: 768px) {
       width: 540px;
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
