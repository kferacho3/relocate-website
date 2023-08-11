import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const ApplyPageContainer = styled.div`
    position: relative;

    width: 100vw;
    height: 150vh;

`

export const ApplyPageFormContainer = styled.div`
    width: 1200px;
    height: 1500px;
    zoom: 0.7;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    background: conic-gradient(from 180deg at 50% 50%, #6994F4 0deg, rgba(105, 148, 244, 0) 76.88deg, rgba(105, 148, 244, 0.59375) 146.25deg, rgba(105, 148, 244, 0.322917) 172.5deg, rgba(105, 148, 244, 0.353041) 266.25deg, rgba(105, 148, 244, 0.708333) 303.75deg, rgba(105, 148, 244, 0.0729167) 333.75deg, #6994F4 360deg);
    border: 0.2px solid #000000;
    
    //margin-top: 50%;
    right: 0;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0;
    overflow: hidden;  

    @media screen and (max-width: 870px) {
        transform: translate(-50%, 0%) scale(0.7);
       
        }  
        @media screen and (max-width: 640px) {
            transform: translate(-50%, 0%) scale(0.45);
       
        } 
`

export const ApplyPageHeader = styled.h1`
    white-space: nowrap;
    height: 55px;
    margin-top: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
  



    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 75px;
    /* or 117% */

    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: -1px;
    text-transform: capitalize;

    color: #233152;
    @media screen and (max-width: 870px) {
       zoom: 0.9;
       
        }  
        @media screen and (max-width: 640px) {

    margin-top: 400px;
            zoom: 0.5;
       
        } 
`

export const ApplyPageTopLine =styled.h2`
    margin-left: 50%;
    transform: translateX(-50%);

    height: 30px;


    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 75px;

    align-items: center;
    text-align: center;
    justify-content: center;
    /* or 234% */

    letter-spacing: -1px;
    text-transform: capitalize;

    color: #233152;
    @media screen and (max-width: 870px) {
        zoom: 0.9;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.5;
       
        } 
`
export const ApplyPageForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    

   
    grid-template-areas: 'col1' 'col2' 'col3' 'col4' 'col5';
 

`

export const ApplyPageButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);
//left: 281.62px;
//top: 939px;

`

export const ApplyPageLeftButton = styled.button`
    //position: absolute;
    width: 200px;
    height: 67px;
    left: 281.62px;
    top: 939px;
    border: none;
    cursor: pointer;
    background: linear-gradient(180deg, #16D3A9 0%, #00FF01 100%);
    box-shadow: 1px 1px 25px rgba(14, 34, 64, 0.15);
    border-radius: 30px;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;

    color: #FFFFFF;
    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`

export const ApplyPageRightButton = styled.button`
    position: absolute;
    width: 200px;
    height: 67px;
    right: 0%;
    cursor: pointer;
    border: none;
    background: linear-gradient(180deg, #16D3A9 0%, #00FF01 100%);
    box-shadow: 1px 1px 25px rgba(14, 34, 64, 0.15);
    border-radius: 30px;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;

    color: #FFFFFF;
    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`

export const Col1 = styled(LinkR)`
    //pointer-events: none;
    width: 1000px;
    height: 275px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translate(-50%);   
    position: relative;
    display: grid;
     grid-template-columns: 1fr 1fr;
    //gap: 0px;
    grid-area: col1;
    cursor: pointer;
    text-decoration: none;
    grid-template-areas: 'text1 img';

    &:hover {
            //z-index: 99999;
        opacity: 0.9;
        cursor: pointer;
    }

    
`
export const Col2 = styled(LinkR)`
    //pointer-events: none;
    width: 1000px;
    height: 275px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col2;
    cursor: pointer;
    text-decoration: none;
    
    grid-template-areas: 'img text1';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }

`

export const Col3 = styled(LinkR)`
    //pointer-events: none;
    width: 1000px;
    height: 275px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col3;
    cursor: pointer;
    text-decoration: none;
    
    grid-template-areas: 'text1 img';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }

`

export const Col4 = styled(LinkR)`
    //pointer-events: none;
    width: 1000px;
    height: 275px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col4;
    cursor: pointer;
    text-decoration: none;
    
    grid-template-areas: 'img text1';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }

`

export const Col5 = styled(LinkR)`
    //pointer-events: none;
    width: 1000px;
    height: 275px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col5;
    cursor: pointer;
    text-decoration: none;
    
    grid-template-areas: 'text1 img';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }
  
`

export const Sec1 = styled.div`
    width: 300px;
    grid-area: text1;
    margin-left: 50%;
    transform: translate(-55%, 10%);  
`
export const Sec2= styled.div`
    width: 400px;
    grid-area: img;
    margin-left: 50%;
    transform: translate(-55%, 10%);  
`


export const ApplyPageInput1Head = styled.h1`

    width: 389px;
    height: 39px;
  

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 45px;
    /* or 94% */

    display: flex;
    align-items: center;

    color: #000000;
`

export const ApplyPageInput1Text = styled.p`

    width: 386px;
    height: 66px;
 

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    display: flex;
    align-items: center;

    color: #000000;
`

export const ApplyPageInput1Img = styled.img`

    width: 444.39px;
    height: 246.98px;
  
    
`



export const ApplyPageInput2Head = styled.h1`
  
    width: 389px;
    height: 39px;
    left: 343px;
    top: 310px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 45px;
    /* or 94% */

    display: flex;
    align-items: center;

    color: #000000;
`

export const ApplyPageInput2Text = styled.p`

    width: 386px;
    height: 66px;
    left: 81px;
    top: 141px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    display: flex;
    align-items: center;

    color: #000000;
`

export const ApplyPageInput2Img = styled.img`
   
    width: 444.39px;
    height: 246.98px;
    left: 798.96px;
    top: 280.95px;
    
`