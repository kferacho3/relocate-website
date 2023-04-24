import styled from 'styled-components';



export const ApplyPageContainer = styled.div`
position: relative;

    width: 100vw;
    height: 1000px;
 

`

export const ApplyPageFormContainer = styled.div`
    width: 1190px;
    height: 1369px;
    left: 163px;
    top: 332px;

    background: conic-gradient(from 180deg at 50% 50%, #6994F4 0deg, rgba(105, 148, 244, 0) 76.88deg, rgba(105, 148, 244, 0.59375) 146.25deg, rgba(105, 148, 244, 0.322917) 172.5deg, rgba(105, 148, 244, 0.353041) 266.25deg, rgba(105, 148, 244, 0.708333) 303.75deg, rgba(105, 148, 244, 0.0729167) 333.75deg, #6994F4 360deg);
    border: 0.2px solid #000000;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0;
    overflow: hidden;  

    @media screen and (max-width: 870px) {
        transform: translate(-50%, -50%) scale(0.8);
       
        }  
        @media screen and (max-width: 640px) {
            transform: translate(-50%, 0%) scale(0.4);
       
        } 
`

export const ApplyPageHeader = styled.h1`
  
    width: 500px;
    height: 55px;
    margin-top: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
  



    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 75px;
    /* or 117% */

    display: flex;
    align-items: center;
    letter-spacing: -1px;
    text-transform: capitalize;

    color: #233152;
    @media screen and (max-width: 870px) {
       zoom: 0.9;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.8;
       
        } 
`

export const ApplyPageTopLine =styled.h2`
    margin-left: 50%;
    transform: translateX(-50%);

    width: 600px;
    height: 30px;


    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 75px;
    /* or 234% */

    display: flex;
    align-items: center;
    letter-spacing: -1px;
    text-transform: capitalize;

    color: #233152;
    @media screen and (max-width: 870px) {
       zoom: 0.95;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.9;
       
        } 
`
export const ApplyPageForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;

   
    grid-template-areas: 'col1' 'col2';
 

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
`

export const Col1 = styled.div`
    //pointer-events: none;
    width: 90px;
    height: 240px;
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
    grid-template-areas: 'text1 img';
    &:focus {
        outline: 10px solid #632ce4;
       // z-index: 99999;
        background-color: wheat;

    }
    &:hover {
            //z-index: 99999;
        opacity: 0.9;
        cursor: pointer;
    }

    
`
export const Col2 = styled.div`
    //pointer-events: none;
    width: 90px;
    height: 240px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col2;
    cursor: pointer;
    
    grid-template-areas: 'img text1';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }
      &:focus {
        opacity: 0.9;
        outline: 10px solid #632ce4;
        outline: 10px solid #632ce4;

}
`

export const Col3 = styled.div`
    //pointer-events: none;
    width: 90px;
    height: 240px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col2;
    cursor: pointer;
    
    grid-template-areas: 'img text1';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }
      &:focus {
        opacity: 0.9;
        outline: 10px solid #632ce4;
        outline: 10px solid #632ce4;

}
`

export const Col4 = styled.div`
    //pointer-events: none;
    width: 90px;
    height: 240px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col2;
    cursor: pointer;
    
    grid-template-areas: 'img text1';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }
      &:focus {
        opacity: 0.9;
        outline: 10px solid #632ce4;
        outline: 10px solid #632ce4;

}
`

export const Col5 = styled.div`
    //pointer-events: none;
    width: 90px;
    height: 240px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-left: 50%;
    transform: translateX(-50%);   
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: col2;
    cursor: pointer;
    
    grid-template-areas: 'img text1';
    &:hover {
        //z-index: 99999;
        opacity: 0.9;
    cursor: pointer;
  }
      &:focus {
        opacity: 0.9;
        outline: 10px solid #632ce4;
        outline: 10px solid #632ce4;

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
export const ApplyPageInput1 = styled.input`
/*
   //visibility: hidden;
    position: absolute;
    z-index: 999;
    margin-left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    width: 1200px;
    height: 300px;
    &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
    &:focus {
        opacity: 0.9;
        outline: 10px solid linear-gradient(180deg, rgba(0, 255, 1, 0.5) 57.29%, rgba(43, 211, 222, 0) 100%);

}
*/
`
export const ApplyPageInput2 = styled.input`
/*
    //background: conic-gradient(from 180deg at 50% 50%, #376392 -58.88deg, #376392 56.98deg, #94DC9C 91.96deg, #376392 135.85deg, #376392 166.63deg, #376392 200.61deg, #376392 222.09deg, #94DC9C 278.45deg, #376392 301.12deg, #376392 416.98deg);
   //visibility: hidden;
    background-color: #fff;
    display: grid; 
    width: 1200px;
    height: 300px;
    z-index: 999;
    right: 0;
    cursor: pointer;
    margin-left: 50%;
    transform: translate(-50%, -118%);    
    &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
    &:focus {
        opacity: 0.9;
        outline: 10px solid #632ce4;

}

*/ 

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