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
        height: 1000px;
         }

  
  @media screen and (max-width: 550px) {
    top: -200px;
    }
    
`;

export const HomeBg = styled.div`
   
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  
    
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;

    }
  
  @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      zoom: 0.5;
    }

`;





export const Col1 = styled.div`
  
    height: 1200px;
    left: 100px;
    top: 0px;
    margin-bottom: 200px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    
 
  
  @media screen and (max-width: 850px) {
      left: 50%;
      transform: translateX(-35%);
    
    }
       @media screen and (max-width: 850px) {
      
    }
`

export const Col2 = styled.div`
   

    height: 1200px;
    right: 0px;
    top: 0px;
    @media screen and (max-width: 850px) {
        
    }
`
/*
export const HomeContainer = styled.div`
    color: #fff;
    margin-top: 75px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#010606')};

    @media screen and (max-width: 640px) {
        padding: 50px 0;
        height: 150vh;
        margin: auto;
        margin-top: 75px;
    }
`;*/

export const HomeContainer1 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#660099')};

    @media screen and (max-width: 768px) {
        padding: 150px 0;
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
    @media screen and (max-width: 768px) {
        margin-left: 50%;
    transform: translateX(-50%);
    }
 

`;

export const HomeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
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

    background: linear-gradient(180deg, #00FF01 0%, #218207 100%);
    border-radius: 80px;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

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

    width: 125px;
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
    height: 101.27px;


    /* Inside auto layout */

    display: grid;
    flex-direction: column;
    order: 0;
    flex-grow: 0;
`
export const HeroServTextHeader = styled.div`
 
    width: 245px;
    height: 75px;
   

    font-family: 'Inter';
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

`;

export const HeroServeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;
export const HeroServText = styled.div`
   
    width: 387.81px;
    height: 61px;
  

    font-family: 'Inter';
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
    
 

    font-family: 'Open Sans';
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
    left: calc(50% - 711.26px/2 + 0.1px);
    top: 155.5px;

    font-family: 'Inter';
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

`
export const HeroTestTextSection = styled.div`
    box-sizing: border-box;
    
    width: 359.95px;
    height: 266.45px;

    background: linear-gradient(180deg, #000100 0%, rgba(39, 210, 11, 0.35) 100%);
    border: 1px solid #FFFFFF;

    /* Inside auto layout */

   
`

export const HeroTestNameHead = styled.h3`
  
    width: 235px;
    height: 16px;
    left: 2.26px;
    top: -0.5px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
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

    font-family: 'Inter';
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

    width: 305.4px;
    height: 144px;
    left: 21px;
    top: 100.95px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
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

    background: rgba(0, 255, 1, 0.3);
    border: 2px solid #69F490;
    border-radius: 80px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const HeroBookSection = styled.div`
  
    height: 600px;
    width: 100vw;
    left: 0%;
    right: 0%;
    display: flex;
    align-items: flex-start;
    background: #376392;

`
export const HeroBookImg = styled.div`

    height: 600px;
    width: 500px;
    background-repeat: no-repeat;
    background-size: cover;


`
export const HeroBookTextSection = styled.div`

    height: 495px;
    width: 750px;
    position: relative;
    right: -15%;

`
export const HeroBookHead = styled.h4`
  
    height: 48px;
    left: 30.71%;
    right: 28.83%;
    top: 66px;

    font-family: 'Inter';
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
    left: 0%;
    right: 3.42%;
    top: 0px;

    font-family: 'Inter';
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

    background: #69F490;
    border-radius: 50px;

`
export const Column1 = styled.div`
  
    width: 525px;
    height: 375px;

    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 11px;
    line-height: 13px;

    color: #69F490;
`;

export const Heading = styled.h1`
 
    width: 433px;
    height: 88px;
    left: 99px;
    top: -43.5px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 44px;
    /* or 92% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #376392;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
  
    width: 524px;
    height: 140px;
    left: 70px;
    top: 113.5px;

    font-family: 'Inter';
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