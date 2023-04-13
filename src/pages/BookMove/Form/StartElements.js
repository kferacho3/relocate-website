import styled from 'styled-components';



export const StartContainer = styled.div`

    width: 1350px;
    height: 800px;
    left: 83px;
    top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    margin-top: 50%;
    right: 0;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  



`
export const StartForm = styled.form`
  

`

export const Col1 = styled.div`
    margin-left: 42%;
    transform: translate(-50%, 15%);   
    position: relative;
    display: grid;
    gap: 200px;
    margin-top: -500px;
    grid-area: col1;
    grid-template-areas: 'text1 img';
`
export const Col2 = styled.div`
    margin-left: 42%;
    transform: translate(-50%, 0%);   
    gap: 200px;
    margin-top: -400px;
    position: relative;
    display: grid;
    grid-area: col2;
    grid-template-areas: 'img text1';
`
export const Sec1 = styled.div`
 width: 400px;
    grid-area: text1;
`
export const Sec2= styled.div`
width: 400px;
    grid-area: img;
`
export const StartInput1 = styled.option`
   

    margin-top: 20%;
    right: 0;
    margin-left: 50%;
    transform: translate(-50%, -70%);    
    display: grid;
    background-color: #fff;
    display: grid;
    width: 1200px;
    height: 280px;
    z-index: 9999;

`
export const StartInput2 = styled.option`

    //background: conic-gradient(from 180deg at 50% 50%, #376392 -58.88deg, #376392 56.98deg, #94DC9C 91.96deg, #376392 135.85deg, #376392 166.63deg, #376392 200.61deg, #376392 222.09deg, #94DC9C 278.45deg, #376392 301.12deg, #376392 416.98deg);
   background-color: #fff;
    display: grid;
    width: 1200px;
    height: 280px;
    margin-top: 20%;
    right: 0;
    cursor: pointer;
    margin-left: 50%;
    transform: translate(-50%, -50%);    

 

`

export const StartInput1Head = styled.h1`

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

export const StartInput1Text = styled.p`

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

export const StartInput1Img = styled.img`

    width: 444.39px;
    height: 246.98px;
    
`



export const StartInput2Head = styled.h1`
  
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

export const StartInput2Text = styled.p`

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

export const StartInput2Img = styled.img`
   
    width: 444.39px;
    height: 246.98px;
    left: 798.96px;
    top: 280.95px;
`