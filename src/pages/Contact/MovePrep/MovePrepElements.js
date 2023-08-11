/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           MovePrep Hero ELEMENTS                                                                                  ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
export const MovePrepHeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #fff;    
    height: 1000px;
    width: 100vw;
    border-radius: 0px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#ffffff')};
 
 
    @media screen and (max-width: 768px) {
        //top: 100px;
        height: 1100px;  
      }
 
    
`;





export const MovePrepHeroButton = styled.button`
  
    flex-direction: row;
    padding: 0px 0px 0px 0px;
    white-space: nowrap;

    width: 600px;
    height: 50px;
    margin-top: 25px;
    cursor: pointer;
    font-family: "inter";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    align-items: flex-start;

    color: #FFFFFF;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1.248px;

    background: linear-gradient(180deg, #00FF01 0%, #33CF09 100%);
    border-radius: 80px;
    border: none;
    
    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem .65rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem .65rem rgba(31, 82, 16, 0.5);
      background: linear-gradient(180deg, #279F85 0%, #33CF09 0%);
  }
`


export const MovePrepHeroWrapper = styled.div`
   
    z-index: 1;
    margin-top: 100px;
  
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100vw;
          height: 500px;  

        margin-top: 0px;
        }

`;

export const MovePrepHeroRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 100px;
   justify-content: center;
   align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        position: absolute;
         margin-left: 50%;
        transform: translateX(-50%);
        gap: 200px;
        grid-template-areas: 'col2' 'col1';   
        }
`;

export const MovePrepColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        position: absolute;
       align-items: center;
     
       justify-content: center;
       width: 600px;
        zoom: 0.55;
        margin-left: 50%;
        transform: translateX(-50%);

    }
`;

export const MovePrepColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.9;
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
        padding: 0%;
        margin-bottom: -200px;
       
    }
`;


export const MovePrepTextWrapper = styled.div`
    align-items: center;
    text-align: center;
    max-width: 540px;

`;

export const MovePrepTopLine = styled.p`

    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
    font-family: "inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14.5008px;
    line-height: 28px;
    justify-content: flex-start;
    /* or 193% */

    display: flex;
    align-items: center;

    color: #69F490;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const MovePrepHeading = styled.h1`
    
    width: 600px;
    height: 31px;
   
    font-family: "inter";
    font-style: normal;
    font-weight: 100;
    font-size: 59.7px;
    line-height: 72px;
    margin-bottom: 75px;
    /* or 117% */

    display: flex;
    align-items: flex-start;

    color: #233152;
    /* or 94% */

    align-items: center;
    text-align: left;
    justify-content: left;

    color: #000000;
    @media screen and (max-width: 768px) {
      

     align-items: center;
   
     justify-content: left;
 

  }


`;

export const MovePrepSubtitle = styled.p`
    
    width: 600px;
    height: 122px;
    margin-top: 10px;
    margin-bottom: 0px;

    


    font-style: normal;
    font-family: "inter";
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    /* or 133% */

    display: flex;
    align-items: flex-start;
    text-align: left;

    color: #000000;
    @media screen and (max-width: 768px) {
       width: 540px;
    }
`;

export const MovePrepBtnWrap = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 640px) {
        align-items: center;
        display:block;
        margin: auto;
    }
    
`

export const MovePrepImgWrap = styled.div`
    width: 600px;
    height: 450px;
    

`;

export const MovePrepImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-top: -100px;
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Relocation Info ELEMENTS                                                                                ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const MovePrepInfoContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #fff;    
    height: 1000px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#376392')};
 
 
    @media screen and (max-width: 768px) {
        
        height: 1150px;  
      }
 
    
`;


export const MovePrepInfoTextContainer = styled.div`
    width: 750px;
    height: 552px;
   
    overflow: hidden;
    //background: linear-gradient(180deg, #A4FFA4 0%, #C5FCC5 17.71%, #4CFF4C 71.87%, #4CC24C 90.62%);
    //background: ${({divBg}) => (divBg ? '#F0F8FF' : '#376392')};
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    
`



export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 100px;
    position: relative;
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
       display: flex;
       align-items: center;
       padding: 0%;
       justify-content: center;
        zoom: 0.75;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 100px;
    position: relative;
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.95;
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
        padding: 0%;
        margin-bottom: -200px;
       
    }
`;




export const TextWrapper = styled.div`



    //transform: ${({trans}) => (trans ? 'translateX(-5%)' : 'translateX(-95%)')};

`;



export const ImgWrap = styled.div`

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;



export const DivBg = styled.img`
   
    overflow: hidden;
    width: 700px;
    height: 620px;
    justify-content: center;
    margin-left: -75px;
    margin-top: -55px;
    position: relative;
    z-index: -9999999;
    transform: ${({divStart}) => (divStart ? `scaleX(-1)` : `scaleX(1)`)};
    @media screen and (max-width: 768px) {
        
       margin-top: 0px;
       margin-left: 0px;
       
    }

  
 
`

export const MovePrepInfoButton = styled(LinkR)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;
    white-space: nowrap;

    width: 180px;
    height: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 25px;
    cursor: pointer;
    font-style: normal;
    font-family: "inter";
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.248px;

    color: #FFFFFF;

    background: linear-gradient(180deg, #279F85 0%, #3965C8 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 80px;
    border: none;

    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem .65rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem .65rem rgba(31, 82, 16, 0.5);
      background: linear-gradient(180deg, #279F85 0%, #3965C8 0%);
  }
`


export const MovePrepInfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 800px;  
        }

`;

export const MovePrepInfoRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 100px;
        padding: 10px; 
        grid-template-areas: 'col2' 'col1';   
        }
`;


export const TopLine = styled.p`
    color: #660099;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
export const HeadingBg = styled.img`
    width: 615px;
    height: 100px;
    position: absolute;
    margin-left: -10%;
    margin-top: -35px;

`
export const Heading = styled.h1`
    
    width: 267px;
    height: 31px;
    margin-left: 10%;
    white-space: nowrap;
    position: relative;
    font-style: normal;
    font-family: "inter";
    font-weight: 700;
    font-size: 40px;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 0px;
    /* or 94% */

    align-items: center;
    text-align: center;
    justify-content: center;

    color: ${({lightText}) => (lightText ? '#fff' : '#000')};


`;

export const Subtitle = styled.li`
    
    width: 500px;
    font-style: normal;
    font-family: "inter";
    font-weight: 900;
    font-size: 14.5px;
    line-height: 18px;
    /* or 133% */
    margin-top: 50px;
    margin-left: 50px;
    align-items: left;
    text-align: left;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 640px) {
        align-items: center;
        display:block;
        margin: auto;
    }
    
`



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           MovePrep Data ELEMENTS                                                                                  ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MovePrepDataWrapper = styled.div`
    
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 800px;  
        }

`;

export const MovePrepDataRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
   
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 60px;
        grid-template-areas: 'col3' 'col2' 'col1';   
        }
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           MovePrep Tips ELEMENTS                                                                                  ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MovePrepTipsWrapper = styled.div`


    @media screen and (max-width: 768px) {
            margin-top: 0px;

        }

`;

export const MovePrepTipsRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 1fr;
        margin-top: 0px;
        gap: 100px;
        grid-template-areas: 'col3' 'col2' 'col1';   
        }
`;


export const TipsColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    position: relative;
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
  
    }
`;

export const TipsColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    
    position: relative;
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
   
       
    }
`;


export const TipsColumn3 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    
    position: relative;
    grid-area: col3;
    
    @media screen and (max-width: 768px) {
       
      

    }
`;

export const TipsTextWrapper = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;


    transform: ${({trans}) => (trans ? 'translateX(-5%)' : 'translateX(-95%)')};

`;
export const TipsImgWrap = styled.div`
    width: 450px;
    height: 350px;
    @media screen and (max-width: 768px) {
       
      zoom: 0.8;

    }
`;

export const TipsImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    

`;


export const MovePrepTipsHeading = styled.h1`
    
    width: 175px;
    height: 31px;
    margin-left: 50%;
    transform: translateX(-50%);
    //white-space: nowrap;
    position: relative;
    font-style: normal;
    font-family: "inter";
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    
    margin-top: -350px;
    /* or 94% */

    align-items: center;
    text-align: center;
    justify-content: center;

    color: ${({lightText}) => (lightText ? '#fff' : '#000')};

    @media screen and (max-width: 768px) {
            font-size: 18px;
            margin-top: -350px;
     
        }
`;

export const MovePrepTipsSubtitle = styled.p`
    
    width: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
  
    font-style: normal;
    font-family: "inter";
    font-weight: 900;
    font-size: 12.5px;
    line-height: 16px;

    margin-top: 35px;
    /* or 133% */
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    @media screen and (max-width: 768px) {
        font-size: 10px;
        width: 175px;
    }
`;


export const MovePrepTipLogoWrap = styled.div`
    position: absolute;
    width: 75px;
    height: 75px;
    margin-left: 50%;
    transform: translateX(-50%);
    zoom: 0.7;

    margin-top: -125px;

`
export const Logo = styled.img`
    width: 100%;


`






