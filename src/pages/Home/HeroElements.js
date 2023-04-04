import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HomeContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
   
    background: #fff;    
    height: 800px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        margin-top: 175px;
        height: 800px;
        
         }

  

`;










export const HomeWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
  

`;

export const HomeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2';
        justify-content: center;
        //transform: scale(0.7);
        zoom: 0.7;
        
        
    }
 
`;
export const HomeButton = styled(LinkR)`
   
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#660099' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: ${({dark}) => (dark ? '#010606' : '#fff')} ;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #00FF01 0%, #218207 100%);
    border-radius: 180px;
    width: 250px;
    margin-top: 25px;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 15px;

    @media screen and (max-width: 640px) {
        align-items: center;
		
		display:block;
			
		margin: auto;
    }
    
`

export const HeroServicesSection = styled.div`


    width: 100vw;
    height: 788px;
    
    overflow: hidden;
   

    background: #376392;
    @media screen and (max-width: 768px) {
       height: 850px;
    }
   
`
export const HeroServContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas: 'logo text';
    gap: 50px;
    align-items: center;

    width: 500px;
    height: 150px;
    

    
 
`
export const HeroServImgContainer = styled.div`

    width: 128px;
    height: 125px;

`
export const HeroServImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const HeroServTextSection = styled.div`
    width: 415px;
    //height: 130px;

    /* Inside auto layout */

    order: 0;
    
    flex-grow: 0;
`
export const HeroServTextHeader = styled.div`
 
    width: 245px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 45px;
    /* identical to box height, or 196% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
`

export const HeroServeWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
       margin-left: -20px;
       margin-top: -240px
    }
  

`;

export const HeroServeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   
    @media screen and (max-width: 768px) {
        margin: auto;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2';
        justify-content: center;
        transform: scale(0.6);
    }
`;
export const HeroServText = styled.div`
   
    width: 387.81px;
    height: 61px;
  

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    /* or 201% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
`

export const HeroTestHeader = styled.h2`
    
 

    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    text-align: center;

    color: #FFFFFF;
`
export const HeroTestMain = styled.p`
    
    width: 711.26px;
    height: 120px;
  

    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 40px;
    /* or 190% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

export const HeroTestApost1 = styled.div`
  
    width: 60px;
    height: 39.34px;
    left: calc(50% - 60px/2 - 403px);
    top: calc(50% - 39.34px/2 - 181.83px);
`
export const HeroTestApost2 = styled.div`

    width: 60px;
    height: 39.34px;
    left: calc(50% - 60px/2 + 446px);
    top: calc(50% - 39.34px/2 - 100.83px);

    transform: matrix(-1, 0, 0, 1, 0, 0);
`
export const HeroTestMainStars = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 120px;
    height: 24px;
    left: calc(50% - 120px/2);
    top: 340px;
`
export const HeroTestSection = styled.div`
  
 

    overflow: hidden;
    background: #376392;
 
    width: 100vw;
    height: 1000px;

  
  
`
export const HeroTestContainer = styled.div`


    align-items: center;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    gap: 20px;

 


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
    @media screen and (max-width: 768px) {
      
      //transform: scale(0.7);
      zoom: 0.6;
      height: 160vh;
      
      
  }
`

export const HeroTestDivContainer = styled.div`
   
    height: 418px;
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 100px;
    align-items: center;
    justify-content: center;
    position: relative;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2' 'col3';
        justify-content: center;
       margin-top: 350px;
        
    }

`
export const HeroTestTextSection = styled.div`
    box-sizing: border-box;
    
    width: 359.95px;
    max-height: 100%;

    background: linear-gradient(180deg, #000100 0%, rgba(39, 210, 11, 0.35) 100%);
    border: 1px solid #FFFFFF;
    

    /* Inside auto layout */

   
`

export const HeroTestNameHead = styled.h3`
  
    width: 235px;
    height: 16px;
    left: 2.26px;
    top: -0.5px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    white-space: nowrap;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
`
export const HeroTestNameDate = styled.h3`

    width: 56px;
    height: 20px;
    left: 2px;
    top: 16px;
    white-space: nowrap;

    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 19px;
    /* identical to box height, or 213% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
`
export const HeroTestTop = styled.div`
    box-sizing: border-box;

    width: 357.95px;
    height: 80.45px;
    left: 1px;
    top: 1px;

    border-bottom: 1px solid #FFFFFF;
`
export const HeroTestText = styled.p`

    width: 360px;
    height: 144px;

    text-align: center;

    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 24px;
    /* or 171% */

    display: flex;
    align-items: center;

    color: #E4E4E4;
`
export const HeroTestRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 90px;
    height: 18px;
    left: 134px;
    top: 52px;
`
export const HeroTestButton = styled.button`
    box-sizing: border-box;

    width: 250px;
    height: 48px;
    cursor: pointer;

    background: rgba(0, 255, 1, 0.3);
    border: 2px solid #69F490;
    border-radius: 80px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    @media screen and (max-width: 768px) {
   
       margin-top: 325px;
        
    }
`

export const HeroBookSection = styled.div`
  
    height: 600px;
    width: 100vw;
    left: 0%;
    right: 0%;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    background: #376392;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2';
        justify-content: center;

       height: 160vh;
        
    }

`
export const HeroBookImg = styled.img`

    height: 600px;
    width: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 768px) {
 
       margin-left: 0%;
       
        
    }


`
export const HeroBookTextSection = styled.div`

    height: 495px;
    width: 750px;
    position: relative;
    right: -15%;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
        width: 550px;
       
        
    }

`
export const HeroBookHead = styled.h4`
  
    height: 48px;
    left: 30.71%;
    right: 28.83%;
    top: 66px;

    font-style: normal;
    font-weight: 400;
    font-size: 47px;
    line-height: 58px;
    /* or 123% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

`
export const HeroBookText = styled.p`
   
    height: 110px;
    margin-top: 50px;

    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    /* or 147% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

`
export const HeroBookButton = styled.button`
   
    height: 55px;
    left: 39.83%;
    right: 37.9%;
    top: 389px;
    cursor: pointer;
    background: #69F490;
    border-radius: 50px;

`
export const Column1 = styled.div`
  
    width: 525px;
    height: 375px;

    grid-area: col1;
    @media screen and (max-width: 768px) {
        
       display: flex;
       align-items: center;
       justify-content: center;
      
    }

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    
    grid-area: col2;
    @media screen and (max-width: 768px) {
        
        display: flex;
        align-items: center;
        justify-content: center;
       
     }
    
`;


export const TextWrapper = styled.div`
    max-width: 540;
    padding-top: 0;
    padding-bottom: 60px;
    
  

`;

export const TopLine = styled.p`

    width: 62px;
    height: 13px;
    top: 74.5px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 13px;

    color: #69F490;
`;

export const Heading = styled.h1`
 
    width: 433px;
    height: 88px;
    left: 99px;
    top: -43.5px;

    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 44px;
    /* or 92% */

    display: flex;
    align-items: center;
    //text-align: center;

    color: #376392;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
  
    width: 470px;
    height: 140px;
    left: 70px;
    margin-top: 50px;

    font-style: normal;
    font-weight: 400;
    font-size: 16.5px;
    line-height: 28px;
    /* or 170% */

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #747C82;
`;




export const ImgWrap = styled.div`
    width: 625px;
    height: 500px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.65);
        margin: auto;
         }
`;

export const Img1 = styled.img`
    width: 100%;
    height: 100%;
    
    margin: 0 0 10px 0;
    padding-right: 0;
`;