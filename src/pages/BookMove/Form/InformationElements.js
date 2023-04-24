import styled from 'styled-components';



export const InformationContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
    
 

`

export const InformationFormContainer = styled.div`
    width: 1350px;
    height: 800px;
   // left: 83px;
    justify-content: center;
    //top: 186px;
    display: grid;
    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    //margin-right: 0;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  

    @media screen and (max-width: 870px) {
        transform: translate(-50%, -50%) scale(0.8);
       
        }  
        @media screen and (max-width: 640px) {
            transform: translate(-50%, 0%) scale(0.4);
       
        } 
`

export const InformationHeader = styled.h1`
  
    width: 1100px;
    height: 44px;
    margin-top: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
  

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 43px;
    /* identical to box height, or 149% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #233152;
    @media screen and (max-width: 870px) {
       zoom: 0.9;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.8;
       
        } 
`

export const InformationTopLine =styled.h2`
    margin-left: 50%;
    transform: translateX(-50%);

    width: 700px;
    height: 36px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 36px;
    /* identical to box height, or 189% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #747C82;
    @media screen and (max-width: 870px) {
       zoom: 0.95;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.9;
       
        } 
`

export const InformationForm = styled.form`
    //zoom: 0.9;

`

export const InfoInputContainer = styled.div`
    width: 900px;
    top: 50px;
    position: absolute;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    left: 50%;
    transform: translateX(-50%);
   // margin-top: 50px;
    gap: 100px;
    grid-template-areas: 'col1 col2';
`

export const IFirstName = styled.input`

    box-sizing: border-box;

    position: relative;
    width: 400px;
    height: 40px;
  


    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
`

export const ILastName = styled.input`

    box-sizing: border-box;

    position: relative;
    width: 400px;
    height: 40px;


    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
`

export const IPhoneNumber = styled.input`

    box-sizing: border-box;

    position: relative;
    width: 400px;
    height: 40px;

  

    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
`

export const IEmail = styled.input`

    box-sizing: border-box;

    position: relative;
    width: 400px;
    height: 40px;

  

    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
`
export const IInputContainer = styled.div`
    position: relative;
        
    width: 407.88px;
    height: 123px;

`

export const IInputText = styled.p`
    position: relative;
    width: 150.86px;
    height: 18px;
    white-space: nowrap;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`
export const ILocationContainer = styled.div`
    position: relative;

    width: 407.88px;
    height: 90px;

`

export const ILocationText = styled.p`
    position: relative;
    width: 150.86px;
    height: 18px;
    white-space: nowrap;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`

export const ILocation = styled.input`
    box-sizing: border-box;
    z-index: 9999;
   // position: absolute;
   width: 400px;
    height: 40px;



    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    color: #000;
`

export const IButton = styled.div`
    position: relative;
    top: 50px;
    width: 407.88px;
    height: 90px;
`
export const ILocationButton = styled.button`
    //position: absolute;
    width: 95px;
    height: 95px;
    zoom: 0.7;
    cursor: pointer;
  
    margin-left: 50%;
    transform: translateX(-50%);
     background-repeat: no-repeat;
    background-size: cover;
    background: none;
    border: none;

`
export const ILocationRemove = styled.button`
    //position: absolute;
    width: 95px;
    height: 95px;
    zoom: 0.7;
    cursor: pointer;
  
    margin-left: 50%;
    transform: translateX(-50%);
     background-repeat: no-repeat;
    background-size: cover;
    background: none;
    border: none;

`
export const ILocationButtonText = styled.p`
    position: relative;
    display: flex;
   left: 50%;
   transform: translateX(-50%);
    width: 300px;
    height: 18px;
    white-space: nowrap;
    top: -50px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
   // display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`
export const InformationButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const InformationLeftButton = styled.button`

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

export const InformationRightButton = styled.button`
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
    position: relative;
    grid-area: col1;
    
`
export const Col2 = styled.div`
    margin-top: -40px;
   position: relative;
    grid-area: col2;

`


