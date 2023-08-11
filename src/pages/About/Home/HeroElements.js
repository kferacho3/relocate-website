import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

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
        margin-top: 140px;
        height: 700px;
        
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
  
    background: linear-gradient(180deg, #00FF01 0%, #33CF09 100%);
    border-radius: 180px;
    height: 0px;
    width: 400px;
    margin-top: 75px;
    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem .65rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem .65rem rgba(31, 82, 16, 0.5);
      background: linear-gradient(180deg, #00FF01 0%, #33CF09 0%);
  }
`

export const BtnWrap = styled.div`
    display:block;
    align-items: center;
    justify-content: flex-start;
  

	margin: auto;

    @media screen and (max-width: 640px) {
        align-items: center;
		
		display:block;
			
		margin: auto;
    }
    
`

export const HeroServicesSection = styled.div`


    width: 100vw;
    height: 1200px;
    overflow: hidden;
   
    background: linear-gradient(180deg, #FFFFFF 0%, #94DC9C 50%, rgba(148, 220, 156, 0) 100%);
    @media screen and (max-width: 768px) {
       
       height: 1800px;
    }
   
`
export const HeroServContainer = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 999;
    width: 600px;
    height: 150px;
    margin-top: 150px;
    z-index: 9999;
    
    align-items: center;
    background: linear-gradient(180deg, #B1C9FF 0%, #6994F4 18.23%, #596D83 67.19%, #4D7EAF 100%);
    //border: 0.25px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    
    

    
 
`
export const HeroServicesHeader = styled.h2`
 
    width: 631px;
    height: 44px;
    margin-left: 50%;
    transform: translate(-50%, 100px);
    font-family: "inter";
    font-style: normal;
    white-space: nowrap;
    font-weight: 800;
    font-size: 48px;
    line-height: 44px;
    
    /* identical to box height, or 92% */

    align-items: center;
    text-align: center;

    color: #000000;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
        white-space: normal;
   }
`
export const HeroServImgContainer = styled.div`
    position: absolute;
    margin-left: 60px;
    margin-top: 20px;
    width: 55px;
    height: 55px;

`
export const HeroServImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const HeroServTextSection = styled.div`
    width: 600px;
    height: 160px;
    overflow: hidden;
  
`
export const HeroServTextHeader = styled.div`
 
    width: 250px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-family: "inter";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    align-items: center;
    text-align: center;

    color: #ffffff;
    margin-left: 50%;
    transform: translate(-50%, 30px);

   
`

export const HeroServeWrapper = styled.div`

    margin-top: 100px;
    max-width: 1100px;
    margin-left: 50%;
    transform: translateX(-50%);
    
    @media screen and (max-width: 768px) {
   
       margin-top: -340px
    }
  

`;

export const HeroServeRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    zoom: 0.8;
    gap: 200px;
    align-items: center;
    justify-content: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   
    @media screen and (max-width: 768px) {
        margin: auto;
        zoom: 1;
       // margin-top: 100px;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2';
        justify-content: center;
        transform: scale(0.6);
    }
`;

export const HeroServHeader = styled.h2`
 
    width: 631px;
    height: 44px;
    margin-left: 50%;
    transform: translate(-50%, 20px);
    font-family: "inter";
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
export const HeroServText = styled.div`
   
    width: 520px;
    height: 61px;
  
    margin-top: 22.5px;
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */


    align-items: center;
    text-align: center;

    color: #ffffff;
    margin-left: 50%;
    transform: translateX(-50%);
    
`

export const HeroServDivBg = styled.div`
    width: 750.17px;
    height: 290.66px;
    overflow: hidden;
    justify-content: center;
    margin-left: -70px;
    margin-top: 80px;
    position: absolute;
    transform: matrix(1, 0, 0, .9, 0, 0);
    background-repeat: no-repeat;
    background-size: cover;
   // z-index: -9999999;


`
export const HeroServicesicesSection = styled.div`


    width: 100vw;
    height: 1200px;
    overflow: hidden;
   
    background: linear-gradient(180deg, #FFFFFF 0%, #94DC9C 50%, rgba(148, 220, 156, 0) 100%);
    @media screen and (max-width: 768px) {
       
       height: 1800px;
    }
   
`
export const HeroServicesContainer = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 999;
    width: 600px;
    height: 150px;
    margin-top: 150px;
    z-index: 9999;
    
    align-items: center;
    background: linear-gradient(180deg, #B1C9FF 0%, #6994F4 18.23%, #596D83 67.19%, #4D7EAF 100%);
    //border: 0.25px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    
    

    
 
`
export const HeroServicesicesHeader = styled.h2`
 
    width: 631px;
    height: 44px;
    margin-left: 50%;
    transform: translate(-50%, 20px);
    font-family: "inter";
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
export const HeroServicesImgContainer = styled.div`
    position: absolute;
    margin-left: 60px;
    margin-top: 20px;
    width: 55px;
    height: 55px;

`
export const HeroServicesImg = styled.div`
  
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  
    //grid-area: logo;
`
export const HeroServicesTextSection = styled.div`
    width: 600px;
    height: 160px;
    overflow: hidden;
  
`
export const HeroServicesTextHeader = styled.div`
 
    width: 250px;
    height: 75px;
    margin-bottom: -20px;
    white-space: nowrap;
    font-family: "inter";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    align-items: center;
    text-align: center;

    color: #ffffff;
    margin-left: 50%;
    transform: translate(-50%, 30px);

   
`

export const HeroServicesWrapper = styled.div`

    margin-top: 100px;
    max-width: 1100px;
    margin-left: 50%;
    transform: translateX(-50%);
    
    @media screen and (max-width: 768px) {
   
       margin-top: -340px
    }
  

`;

export const HeroServicesRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    zoom: 0.8;
    gap: 200px;
    align-items: center;
    justify-content: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   
    @media screen and (max-width: 768px) {
        margin: auto;
        zoom: 1;
       // margin-top: 100px;
        grid-template-columns: 1fr;
        grid-template-areas:  'col1' 'col2';
        justify-content: center;
        transform: scale(0.6);
    }
`;


export const HeroServicesText = styled.div`
   
    width: 520px;
    height: 61px;
  
    margin-top: 22.5px;
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */


    align-items: center;
    text-align: center;

    color: #ffffff;
    margin-left: 50%;
    transform: translateX(-50%);
    
`

export const HeroServicesDivBg = styled.div`
    width: 750.17px;
    height: 290.66px;
    overflow: hidden;
    justify-content: center;
    margin-left: -70px;
    margin-top: 80px;
    position: absolute;
    transform: matrix(1, 0, 0, .9, 0, 0);
    background-repeat: no-repeat;
    background-size: cover;
   // z-index: -9999999;


`
export const HeroDeco1 = styled.img`
    position: absolute;
    width: 144px;
    height: 55px;
    margin-top: 95px;
    margin-left: -60px;

    transform: matrix(1, 0, 0, -.4, 0, 0);
`
export const HeroDeco2 = styled.img`
  position: absolute;
    width: 159px;
    height: 60px;
    margin-left: 505px;
    //margin-right: -20px;
    margin-top: 0px;

    transform: matrix(1, 0, 0, -.4, 0, 0);
`

export const HeroTestHeader = styled.h2`
    
 
    font-family: "inter";
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
  
    font-family: "inter";
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
    height: 1200px;

  
  
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
    //height: 218.45px;

    background: linear-gradient(180deg, #000100 0%, rgba(39, 210, 11, 0.35) 100%);
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    

    /* Inside auto layout */
    @media screen and (max-width: 768px) {
        width: 420px;
       // height: 700px;
    
}
   
`
export const HeroTestTextSectionM = styled.div`
    box-sizing: border-box;
    margin-top: 60px;
    width: 359.95px;
    //height: 218.45px;

    background: linear-gradient(180deg, #000100 0%, rgba(39, 210, 11, 0.35) 100%);
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    

    /* Inside auto layout */
    @media screen and (max-width: 768px) {
        width: 420px;
        //height: 700px;
    
}
   
`

export const HeroTestNameHead = styled.h3`
  
    width: 235px;
    height: 16px;
    
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16.5px;
    line-height: 16px;
    text-align: center;
    white-space: nowrap;
    /* identical to box height, or 100% */
    margin-left: 10px;
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
    font-family: "inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-top: -12px;
    margin-left: 10px;
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
    @media screen and (max-width: 768px) {
        width: 360px;
        width: 420px;
}
`
export const HeroTestText = styled.p`

    width: 300px;
    height: 144px;

    text-align: center;
    font-family: "inter";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 24px;
    /* or 171% */

    display: flex;
    align-items: left;
    text-align: left;
    margin-left: 5px;

    color: #E4E4E4;
    margin-left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 768px) {
        width: 360px;
    
}
`
export const HeroTestRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 90px;
    height: 18px;
    left: 134px;
    margin-left: 10px;
    margin-top: -12px;
`
export const HeroTestButton = styled.button`
    box-sizing: border-box;

    width: 350px;
    height: 48px;
    cursor: pointer;

    background: rgba(0, 255, 1, 0.3);
    border: 2px solid #69F490;
    border-radius: 80px;

    /* Inside auto layout */
    margin-top: 70px;
    flex: none;
    order: 1;
    flex-grow: 0;

    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
      backdrop-filter: brightness(50%);
  }
    @media screen and (max-width: 768px) {
   
       margin-top: 450px;
        
    }
`

export const HeroBookSection = styled.div`
  
    height: 700px;
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
    
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 768px) {
 
       margin-left: 0%;
        width: 550px;
        
    }


`

export const HeroBookImgWrap = styled.div`
    
    height: 700px;
    width: 500px;
 
    @media screen and (max-width: 768px) {
 
       margin-left: 0%;
       width: 100%;
        
    }


`
export const HeroBookTextSection = styled.div`
    height: 495px;
    width: 750px;
    position: relative;
    right: -15%;
    margin-top: -50px;
    @media screen and (max-width: 768px) {
        zoom: 0.6;
        width: 575px;
        height: 530;
        right: -7.5%;
        margin-top: 20px;
        justify-content: center;
        
    }

`
export const HeroBookHead = styled.h4`
  
    height: 48px;
    left: 30.71%;
    right: 28.83%;
    top: 66px;
    font-family: "inter";
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
   
    height: 200px;
    margin-top: -50px;
    font-family: "inter";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    /* or 147% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    @media screen and (max-width: 768px) {
        margin-top: 0px;
       display: flex;
       align-items: center;
       justify-content: center;
      
    }

`
export const HeroBookButton = styled(LinkR)`
   
   padding: 10px 0px 0px 0px;
    white-space: nowrap;

    width: 225px;
    height: 40px;
    margin-top: 25px;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-family: "inter";
    font-weight: 800;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 133% */


    color: #FFFFFF;
    /* identical to box height */

    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 1.248px;

 
    background: linear-gradient(180deg, #00FF01 0%, #33CF09 100%);
    border: none;
    border-radius: 50px;
    
    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem .65rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem .65rem rgba(31, 82, 16, 0.5);
      background: linear-gradient(180deg, #00FF01 0%, #33CF09 0%);
  }
    @media screen and (max-width: 768px) {
        width: 550px;
      
    }

`
export const Column1 = styled.div`
  
    width: 525px;
    height: 375px;

    grid-area: col1;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
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
    font-family: "inter";
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 13px;

    justify-content: flex-start;
    color: #69F490;
`;

export const Heading = styled.h1`
 
    width: 433px;
    height: 88px;
    left: 99px;
    top: -43.5px;
    font-family: "inter";
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
    font-family: "inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.5px;
    line-height: 28px;
    /* or 170% */

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #747C82;
    @media screen and (max-width: 768px) {
     
    }
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