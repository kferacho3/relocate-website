import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
export const PackInfoSection = styled.div`
  
    overflow: hidden;
    width: 100vw;
    height: 835px;
   // background: #94DC9C;
   background: linear-gradient(180deg, #FFFFFF 0%, #E4F6E6 4.69%, #94DC9C 52.08%, rgba(148, 220, 156, 0) 100%);
    
    @media screen and (max-width: 768px) {
        height: 1400px;
   }
`

export const PackInfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const PackInfoRow = styled.div`
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


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        zoom: 0.75;
   }
`;

export const Column2 = styled.div`
    margin-bottom: 115px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        zoom: 0.7;
   }
    
`;
export const Column22 = styled.div`
    margin-top: 115px;
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

export const PackInfoHeader = styled.h2`
 
    width: 1000px;
    height: 44px;
    margin-left: 50%;
    transform: translate(-50%, 50px);
    font-style: normal;
    white-space: nowrap;
    font-weight: 800;
    font-size: 60px;
    line-height: 44px;

    ///text-shadow: #000 0.1px;
   //text-stroke: 0.0001px #000000;
    /* identical to box height, or 92% */

    align-items: center;
    text-align: center;

    color: #000000;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
        width: 500px;
        line-height: 64px;
        transform: translate(-50%, 50px);
        white-space: normal;
   }
`
export const PackInfoTextSection = styled.div`
    width: 386px;
    height: 379px;
    position: relative;
    overflow: hidden;

    background: linear-gradient(180deg, #B1C9FF 0%, #6994F4 18.23%, #596D83 67.19%, #4D7EAF 100%);
    border: 0.25px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  

`

export const PackInfoIcon = styled.img`
    
    width: 100%;
    height: 100%;
    

`
export const PackInfoIconWrap = styled.div`
width: 101px;
height: 105px;
margin-top: 25px;
margin-left: 50%;
    transform: translateX(-50%);


`
export const PackInfoTextHeader = styled.p`
   
    height: 31px;
    white-space: nowrap;
    margin-left: 50%;
    transform: translateX(-50%);
   margin-top: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    /* or 94% */

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: #ffffff;
`
export const PackInfoText = styled.p`

    width: 350px;
    height: 146px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: -30px;

    font-style: normal;
    font-weight: 700;
    font-size: 14.5008px;
    line-height: 20px;
    /* or 193% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`
export const PackInfoButton = styled.button`
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

    &:hover {
        opacity: calc(.7);
        transition: all 100ms ease-in-out;
}
`
export const PackInfoBg = styled.img`
    position: absolute;
    justify-content: center;
    margin-left: -60px;
    margin-top: -60px;
    z-index: -1;
    width: 479.17px;
height: 520.37px;
    

`
export const PackDeco1 = styled.img`
    position: absolute;
    width: 190px;
    height: 60px;
    margin-top: 10px;
    margin-left: -50px;

    transform: matrix(1, 0, 0, .5, 0, 0);
`
export const PackDeco2 = styled.img`
    position: absolute;
    width: 190px;
    height: 60px;
    margin-left: 280px;
    //margin-right: -20px;
    margin-top: -50px;

    transform: matrix(1, 0, 0, .5, 0, 0);
`