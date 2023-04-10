import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const PackReqSection = styled.div`


    width: 100vw;
    height: 900px;
    overflow: hidden;
   margin-top: 100px;
    //background: #376392;
    background: linear-gradient(180deg, #376392 0%, rgba(55, 99, 146, 0.6) 66.67%, rgba(255, 255, 255, 0) 100%);
    @media screen and (max-width: 768px) {
       
       height: 1000px;
    }
   
`
export const PackReqContainer = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 999;
    width: 600px;
    height: 150px;
    margin-top: 70px;
    z-index: 9999;
    align-items: center;
    background: linear-gradient(180deg, #7BE97C 0%, #74F174 18.23%, #7ADE7A 42.19%, #32EF32 78.65%, #00FF00 100%);
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    
    

    
 
`
export const PackReqImgContainer = styled.div`
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;
    width: 56px;
    height: 55px;

`
export const PackReqImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const PackReqTextSection = styled.div`
    width: 600px;
    height: 160px;
    left: 108px;
    top: 172px;
    overflow: hidden;
  
`
export const PackReqTextHeader = styled.div`
 
    width: 250px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    align-items: center;
    text-align: center;

    color: #000000;
    margin-left: 50%;
    transform: translate(-50%, 30px);

   
`

export const PackReqWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
  margin-top: -50px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
   
       margin-top: -340px
    }
  

`;

export const PackReqRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   
    @media screen and (max-width: 768px) {
        margin: auto;
        margin-top: 100px;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2';
        justify-content: center;
        transform: scale(0.6);
    }
`;

export const PackReqHeader = styled.h2`
 
    width: 631px;
    height: 44px;
    margin-left: 50%;
    transform: translate(-50%, 20px);
    font-style: normal;
    white-space: nowrap;
    font-weight: 800;
    font-size: 48px;
    line-height: 44px;
    /* identical to box height, or 92% */

    align-items: center;
    text-align: center;

    color: #FFFFFF;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
        white-space: normal;
   }
`
export const PackReqText = styled.div`
   
    width: 500px;
    height: 61px;
  
    margin-top: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */


    align-items: center;
    text-align: center;

    color: #000000;
    margin-left: 50%;
    transform: translateX(-50%);
    
`

export const PackJobDivBg = styled.div`
    width: 669.17px;
    height: 290.66px;
    overflow: hidden;
    justify-content: center;
    margin-left: -25px;
    margin-top: -10px;
    position: absolute;
    transform: matrix(1, 0, 0, .7, 0, 0);
   // z-index: -9999999;


`

export const PackDeco1 = styled.img`
    position: absolute;
    width: 144px;
    height: 55px;
    margin-top: 95px;
    margin-left: -60px;

    transform: matrix(1, 0, 0, -.4, 0, 0);
`
export const PackDeco2 = styled.img`
  position: absolute;
    width: 159px;
    height: 60px;
    margin-left: 505px;
    //margin-right: -20px;
    margin-top: 0px;

    transform: matrix(1, 0, 0, -.4, 0, 0);
`
