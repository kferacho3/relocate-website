
import styled from 'styled-components';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Start ELEMENTS                                                                                          ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





export const StartContainer = styled.div`
    position: relative;

    width: 100vw;
    height: 1000px;
 

`

export const StartFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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

export const StartHeader = styled.h1`
  
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

export const StartTopLine =styled.h2`
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
export const StartForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;

   
    grid-template-areas: 'col1' 'col2';
 

`

export const StartButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);
//left: 281.62px;
//top: 939px;

`

export const StartLeftButton = styled.button`
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

export const StartRightButton = styled.button`
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

export const Col1Start = styled.div`
    //pointer-events: none;
    background-color: #fff;
    width: 1000px;
    height: 300px;
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
export const Col2Start = styled.div`
    //pointer-events: none;
    background-color: #fff;
    width: 1000px;
    height: 300px;
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
export const StartInput1 = styled.input`
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
export const StartInput2 = styled.input`
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





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Service ELEMENTS                                                                                        ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




export const ServiceContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
 

`

export const ServiceFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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

export const ServiceHeader = styled.h1`
  
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

export const ServiceTopLine =styled.h2`
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

export const ServiceForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const ServiceButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const ServiceLeftButton = styled.button`

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

export const ServiceRightButton = styled.button`
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

export const Col1Service = styled.div`


    
`
export const Col2Service = styled.div`



`


export const ServicesSection = styled.div`


    width: 100vw;
    height: 1100px;
    overflow: hidden;
   
    background: linear-gradient(180deg, #FFFFFF 0%, #94DC9C 50%, rgba(148, 220, 156, 0) 100%);
    @media screen and (max-width: 768px) {
       
       height: 1300px;
    }
   
`
export const ServicesOptWrap = styled.div`
`
export const ServicesOptContainer = styled.div`
  
    
    width: 600px;
    height: 160px;
    margin-top: 30px;
    cursor: pointer;
   // z-index: 999;
    background: #FFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;


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
export const ServicesImgContainer = styled.div`
    position: absolute;
    margin-left: 30px;
    margin-top: 20px;
    width: 55px;
    height: 55px;
    z-index: 1;

`
export const ServicesImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const ServicesTextSection = styled.div`
    width: 600px;
    height: 160px;
    left: 108px;
    top: 172px;
    z-index: 1;
    overflow: hidden;
  
`
export const ServicesTextHeader = styled.div`

    width: 300px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 28px;
    /* identical to box height, or 87% */
    z-index: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #1F5EA2;
    margin-left: 50%;
    transform: translate(-50%, 30px);

   
`

export const ServicesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
  margin-top: -50px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    zoom: 0.9;

  

`;

export const ServicesRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   

`;

export const ServicesHeader = styled.h2`
 
    width: 224px;
    height: 28px;
    margin-left: 50%;
    transform: translate(-50%, 20px);
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 28px;
    /* identical to box height, or 87% */

    align-items: center;

    color: #1F5EA2;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
        white-space: normal;
   }
`
export const ServicesText = styled.div`
   
    width: 550px;
    height: 66px;
  
    margin-top: 35px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.5px;
    line-height: 30px;
    /* or 188% */

    align-items: center;
    
    color: #000000;
    margin-left: 50%;
    transform: translateX(-50%);
    
`

export const ServicesInput = styled.input`
    width: 600px;
    height: 160px;
    cursor: pointer;
    
`









/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Information ELEMENTS                                                                                    ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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

export const Col1Info = styled.div`
    position: relative;
    grid-area: col1;
    
`
export const Col2Info = styled.div`
    margin-top: -40px;
   position: relative;
    grid-area: col2;

`







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Home ELEMENTS                                                                                           ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export const HomeContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
 

`

export const HomeFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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


export const HomeHeader = styled.h1`
  
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

export const HomeTopLine =styled.h2`
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

export const HomeForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const HomeButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const HomeLeftButton = styled.button`

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

export const HomeRightButton = styled.button`
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

export const Col1Home = styled.div`


    
`
export const Col2Home = styled.div`



`


export const HomeSection = styled.div`


    width: 100vw;
    height: 1100px;
    overflow: hidden;
   
    background: linear-gradient(180deg, #FFFFFF 0%, #94DC9C 50%, rgba(148, 220, 156, 0) 100%);
    @media screen and (max-width: 768px) {
       
       height: 1300px;
    }
   
`
export const HomeOptWrap = styled.div`
`
export const HomeOptContainer = styled.div`
  
    
    width: 675px;
    height: 130px;
    margin-top: 30px;
    cursor: pointer;
   // z-index: 999;
    background: #FFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;


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
export const HomeImgContainer = styled.div`
    position: absolute;
    margin-left: 30px;
    margin-top: 20px;
    width: 55px;
    height: 55px;
    z-index: 1;

`
export const HomeImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const HomeTextSection = styled.div`
    width: 700px;
    height: 160px;
    left: 108px;
    top: 172px;
    z-index: 1;
    overflow: hidden;
  
`
export const HomeTextHeader = styled.div`

    width: 300px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 28px;
    /* identical to box height, or 87% */
    z-index: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #1F5EA2;
    margin-left: 50%;
    transform: translate(-50%, 30px);

   
`

export const HomeWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-top: -300px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    zoom: 0.9;

  

`;

export const HomeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   

`;
export const HomeFormHeader = styled.h2`
    width: 1095px;
    height: 74px;
    margin-left: 120px;
    margin-top: 0px;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;

    align-items: center;

    color: #FFFFFF;
`

export const HomeFormTopLine = styled.p`
    width: 1095px;
    height: 74px;
    margin-left: 120px;
    margin-top: -100px;

    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    align-items: center;
    letter-spacing: -0.05em;

    background: linear-gradient(180deg, #00FF01 0%, #A5FFA5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const HomeText = styled.div`
   
    width: 650px;
    height: 66px;
  
    margin-top: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.5px;
    line-height: 16px;
    /* or 188% */

    align-items: center;
    
    color: #000000;
    margin-left: 50%;
    transform: translateX(-50%);
    
`

export const HomeInput = styled.input`
    width: 600px;
    height: 160px;
    cursor: pointer;
    
`






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Items ELEMENTS                                                                                          ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




export const ItemsContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
 

`

export const ItemsFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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


export const ItemsHeader = styled.h1`
  
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

export const ItemsTopLine =styled.h2`
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

export const ItemsForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const ItemsButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const ItemsLeftButton = styled.button`

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

export const ItemsRightButton = styled.button`
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
export const SecBackground = styled.div`

    box-sizing: border-box;

    position: absolute;
    width: 1190px;
    height: 650px;
    left: 183px;
    top: 75px;

    background: #FFFFFF;
    border: 1px solid #000000;
`
export const SecWrapper = styled.div`

    z-index: 1;
    margin-top: 50px;
    height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;


`;

export const SecRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 50px;
    //gap: 50px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'sec3 sec2 sec1'` : `'sec1 sec2 sec3'`)};
   
 
@media screen and (max-width: 768px) {
    grid-auto-columns: 1fr;
    gap: 50px;
    grid-template-areas: 'sec1' 'sec2' 'sec3';   
    }

`;

export const SecElementDiv = styled.div`

    box-sizing: border-box;
    position: relative;
    /* Auto layout */

    flex-direction: row;
    align-items: flex-start;
    padding: 2px;
    isolation: isolate;

    width: 310px;
    height: 85px;


    background: #FFFFFF;
    border: 2px solid #57A740;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const SecElementImgWrap = styled.div`
    height: 100%;
    width: 100%;

`
export const SecElementImg = styled.img`
    position: absolute;
    width: 65px;
    height: 65px;
    left: 14px;
    top: 10px;
`
export const SecElementHeader = styled.p`
    margin-left: 50%;
    transform: translateX(-50%);
    width: 150px;
    white-space: nowrap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 23px;
    /* identical to box height, or 153% */
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #153E09;
`

export const SecElementButtonContainer = styled.div`
    position: absolute;
    width: 150px;
    left: 125px;
    top: -10px;
`
export const SecElementButtonWrap = styled.div`
    
    position: absolute;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-areas: 'itm1 itm2 itm3'; 
    margin-top: -10px;
    margin-left: 50%;
    transform: translateX(-50%);
`

export const SecElementAmount = styled.div`
    
    grid-area: itm2;
    
   
    //top: 38px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    /* identical to box height, or 200% */

    align-items: center;

    color: #233152;
`
export const SecElementBtnWrap = styled.button`
    border: none;
    //background-image: url('./FormImg/minus.svg');
  

`
export const SecElementPlus = styled.img`
    cursor: pointer;

    width: 25px;
    height: 25px;
    grid-area: itm3;
`

export const SecElementMinus = styled.img`
    cursor: pointer;
    width: 25px;
    height: 25px;
   
    grid-area: itm1;

`
export const Col1F = styled.div`

    grid-area: sec1;
`
export const Col2F = styled.div`
    grid-area: sec2;
`
export const Col3F = styled.div`
    grid-area: sec3;
`



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Heavy ELEMENTS                                                                                          ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




export const HeavyContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
 

`

export const HeavyFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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


export const HeavyHeader = styled.h1`
  
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

export const HeavyTopLine =styled.h2`
    margin-left: 50%;
    transform: translateX(-50%);

    width: 1200px;
    height: 36px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 36px;
    /* identical to box height, or 189% */

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

export const HeavyForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const HeavyButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const HeavyLeftButton = styled.button`

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

export const HeavyRightButton = styled.button`
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

export const Col1H = styled.div`


    
`
export const Col2H = styled.div`



`



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Date ELEMENTS                                                                                           ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export const DateContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
 

`

export const DateFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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


export const DateHeader = styled.h1`
  
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

export const DateTopLine =styled.h2`
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

export const DateForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const DateButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const DateLeftButton = styled.button`

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

export const DateRightButton = styled.button`
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

export const Col1D = styled.div`


    
`
export const Col2D = styled.div`



`






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Time ELEMENTS                                                                                           ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




export const TimeContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 1000px;
 

`

export const TimeFormContainer = styled.div`
    width: 1350px;
    height: 800px;
    left: 83px;
    //top: 186px;

    background: #376392;
    border-radius: 30px;
    z-index: 999999;
    //margin-top: 50%;
    right: 0;
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


export const TimeHeader = styled.h1`
  
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

export const TimeTopLine =styled.h2`
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

export const TimeForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const TimeButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const TimeLeftButton = styled.button`

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

export const TimeRightButton = styled.button`
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




export const TimeSection = styled.div`


    width: 100vw;
    height: 1100px;
    overflow: hidden;
   
    background: linear-gradient(180deg, #FFFFFF 0%, #94DC9C 50%, rgba(148, 220, 156, 0) 100%);
    @media screen and (max-width: 768px) {
       
       height: 1300px;
    }
   
`
export const TimeOptWrap = styled.div`
`
export const TimeOptContainer = styled.div`
  
    
    width: 675px;
    height: 250px;



    margin-top: 30px;
    cursor: pointer;
   // z-index: 999;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-radius: 4px;

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
export const TimeImgContainer = styled.div`
    position: absolute;
    margin-left: 10px;
    margin-top: 20px;
    width: 240px;
    height: 150px;
    z-index: 1;

`
export const TimeImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const TimeTextSection = styled.div`
    width: 700px;
    height: 160px;
    left: 108px;
    top: 172px;
    z-index: 1;
    overflow: hidden;
  
`
export const TimeTextHeader = styled.div`

    width: 300px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 28px;
    /* identical to box height, or 87% */
    z-index: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #1F5EA2;
    margin-left: 65%;
    transform: translate(-50%, 30px);

   
`

export const TimeWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-top: -200px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    zoom: 0.9;

  

`;

export const TimeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   

`;
export const TimeFormHeader = styled.h2`
    width: 1095px;
    height: 74px;
    margin-left: 120px;
    margin-top: 0px;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;

    align-items: center;

    color: #FFFFFF;
`

export const TimeFormTopLine = styled.p`
    width: 1095px;
    height: 74px;
    margin-left: 120px;
    margin-top: -100px;

    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    align-items: center;
    letter-spacing: -0.05em;

    background: linear-gradient(180deg, #00FF01 0%, #A5FFA5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const TimeText = styled.div`
   
   width: 300px;
    height: 150px;
    margin-top: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.5px;
    line-height: 24px;
    /* or 188% */

    align-items: center;
    
    color: #000000;
    margin-left: 65%;
    transform: translateX(-50%);
    
`

export const TimeInput = styled.input`
    width: 600px;
    height: 160px;
    cursor: pointer;
    
`

