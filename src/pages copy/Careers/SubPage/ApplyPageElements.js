
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           PAGE 1 ELEMENTS   (Text & Img)                                                                         ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ApplyPageContainer = styled.div`
    
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
        
        height: 1300px;  
      }
 
    
`;






export const ApplyPageTextContainer = styled.div`
    width: 625px;
    height: 552px;
   position: relative;
    overflow: hidden;
    //background: linear-gradient(180deg, #A4FFA4 0%, #C5FCC5 17.71%, #4CFF4C 71.87%, #4CC24C 90.62%);
    //background: ${({divBg}) => (divBg ? '#F0F8FF' : '#376392')};
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        zoom: 0.8;
        margin-left: 50%;
        transform: translateX(-50%);
         }

    
`
export const ApplyPageLogo = styled.img`
    width: 100%;


`

export const ApplyPageLogoWrap = styled.div`
    width: 125px;
    height: 125px;
    margin-left: 50%;
    transform: translateX(-50%);
    zoom: 0.7;
    margin-top: 50px;

`
export const ApplyPageDeco1 = styled.img`
    position: absolute;
    width: 144px;
    height: 55px;
    margin-top: 20px;
    margin-left: -25px;

    transform: matrix(1, 0, 0, 0.7, 0, 0);
`
export const ApplyPageDeco2 = styled.img`
    position: absolute;
    width: 159px;
    height: 60px;
    margin-left: 500px;
    //margin-right: -20px;
    margin-top: 350px;

    transform: matrix(1, 0, 0, 0.7, 0, 0);
`

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

export const ApplyPageButton = styled(LinkR)`

    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;
    white-space: nowrap;

    width: 180px;
    height: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 39px;
    /* identical to box height */
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 1.248px;

    color: #FFFFFF;

    background: linear-gradient(180deg, #279F85 0%, #3965C8 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 80px;
    border: none;

    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`


export const ApplyPageWrapper = styled.div`
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

export const ApplyPageRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 0px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 100px;
        grid-template-areas: 'col2' 'col1';   
        }
`;

export const Column1 = styled.div`
    margin-bottom: -150px;
    padding: 0 100px;
    position: relative;
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
        zoom: 0.85;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 100px;
    
    position: relative;
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.85;
    
       
    }
`;


export const TextWrapper = styled.div`
    align-items: center;
    text-align: center;
    margin-top: 85px;

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

export const Heading = styled.h1`
    
    width: 267px;
    height: 31px;
    margin-left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    position: relative;

    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
    /* or 94% */

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: ${({lightText}) => (lightText ? '#fff' : '#000')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    width: 575px;
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
  


    font-family: "inter";
    font-style: normal;
    font-weight: 900;
    font-size: 16.5px;
    margin-top: -100px;
    line-height: 24px;
    /* or 133% */
    justify-content: left;

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

export const ImgWrap = styled.div`
    width: 704.04px;
    height: 554px;
    zoom: 0.85;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;

export const Img1 = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           PAGE 2 ELEMENTS   (Text & Text)                                                                         ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






export const ApplyPageTextContainer2 = styled.div`
  
   position: relative;
    overflow: hidden;
    width: 550px;
    height: 525px;
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width: 768px) {
        margin-top: 150px;
         }

`

export const ApplyPageDeco1b = styled.img`
    position: absolute;
    width: 144px;
    height: 55px;
    margin-top: 0px;
    margin-left: -25px;

    transform: matrix(1, 0, 0, .4, 0, 0);
`
export const ApplyPageDeco2b = styled.img`
    position: absolute;
    width: 159px;
    height: 60px;
    margin-left: 420px;
    //margin-right: -20px;
    margin-top: 340px;

    transform: matrix(1, 0, 0, .4, 0, 0);
`





export const ApplyPage2Wrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 1100px;  
        }

`;

export const TextWrapper2 = styled.div`
    align-items: center;
    text-align: center;
    margin-top: -20px;

`;

export const ApplyPage2Row = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 100px;
        grid-template-areas: 'col2' 'col1';   
        }
`;

export const Subtitle2 = styled.p`
    
    width: 475px;
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
  


    font-family: "inter";
    font-style: normal;
    font-weight: 900;
    font-size: 12.5px;
    margin-top: 20px;
    line-height: 12px;
    /* or 133% */
    justify-content: left;

    align-items: left;
    text-align: left;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;

export const Column1b = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
 
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
        zoom: 0.7;
    }
`;

export const Column2b = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.7;
       
    }
`;










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           PAGE 3 ELEMENTS   (Text, Text, Text)                                                                    ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





export const ApplyPageTextContainer3 = styled.div`
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    width: 400px;
    height: 442px;
    
    border: 0.25px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    
`

export const ApplyPageDeco1c = styled.img`
    position: absolute;
    width: 144px;
    height: 55px;
    margin-top: 0px;
    margin-left: -40px;

    transform: matrix(1, 0, 0, .4, 0, 0);
`
export const ApplyPageDeco2c = styled.img`
  position: absolute;
    width: 159px;
    height: 60px;
    margin-left: 280px;
    //margin-right: -20px;
    margin-top: 385px;

    transform: matrix(1, 0, 0, .4, 0, 0);
`





export const ApplyPage3Wrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 1200px;  
        }

`;

export const ApplyPage3Row = styled.div`
    display: grid;
    
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 50px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 100px;
        grid-template-areas: 'col2' 'col1' 'col3';   
        }
`;

export const Column1c = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
 
    position: relative;
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
        zoom: 0.7;
    }
`;

export const Column2c = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    margin-top: 50px;
    grid-area: col2;
    
    position: relative;
    @media screen and (max-width: 768px) {
        zoom: 0.7;
       
    }
`;

export const Column3c = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
    position: relative;
    grid-area: col3;
    
    @media screen and (max-width: 768px) {
        zoom: 0.7;
       
    }
`;
export const TextWrapper3 = styled.div`
    align-items: center;
    text-align: center;
    margin-top: 80px;

`;

export const Subtitle3 = styled.p`
    
    width: 350px;
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
  


    font-family: "inter";
    font-style: normal;
    font-weight: 900;
    font-size: 12.5px;
    margin-top: 20px;
    line-height: 16px;
    /* or 133% */
    justify-content: left;

    align-items: left;
    text-align: left;

    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           PAGE 4 ELEMENTS   (Text & Form)                                                                         ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const ApplyPageRow4 = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        margin-top: 0px;
        gap: 100px;
        grid-template-areas: 'col2' 'col1';   
        }
`;

export const ApplyPageFormContainer = styled.form`
    width: 585px;
    height: 600px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
`

export const ApplyPageFormHeader = styled.div`
    width: 362px;
    height: 42px;
    left: 52.44px;
    top: 16px;
    margin-left: 50%;
    transform: translate(-50%, 50%);
    margin-top: 0px;
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 42px;
    /* identical to box height, or 166% */

   
    align-items: center;
    text-align: center;

    color: #233152;


`
export const ApplyPageFormInputWrap = styled.div`
position: absolute;
    margin-top: 50px;


`
export const Subtitle4 = styled.p`
    
    width: 575px;
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
  


    font-family: "inter";
    font-style: normal;
    font-weight: 900;
    font-size: 16.5px;
    margin-top: -60px;
    line-height: 24px;
    /* or 133% */
    justify-content: left;

    align-items: left;
    text-align: left;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;
export const ApplyFirstName = styled.input`
    height: 50px;
   width: 250px;
    box-sizing: border-box;
    position: absolute;
    left: 30px;
    right: 272px;
    top: 11px;
    z-index:1;
  font-size:1.3rem;
  padding: 3px 5px;
  padding-left:50px;
    bottom: 284px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;

`

export const ApplyLastName = styled.input`
    height: 50px;
    width: 250px;
    box-sizing: border-box;
    position: absolute;
    left: 305px;
    right: 0px;
    top: 11px;
    z-index:1;
  font-size:1.3rem;
  padding: 3px 5px;
  padding-left:50px;
    bottom: 284px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`
export const ApplyCompany = styled.input`
    height: 50px;
    width: 250px;
    box-sizing: border-box;
    position: absolute;
    left: 30px;
    right: 272px;
    top: 82px;
    bottom: 213px;
    z-index:1;
  font-size:1.3rem;
  padding: 3px 5px;
  padding-left:50px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`
export const ApplyDOT = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 250px;
    height: 50px;
    left: 305px;
    right: 0px;
    top: 105px;
    bottom: 213px;
    z-index:1;
  font-size:1.3rem;
  padding: 3px 5px;
  padding-left:50px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`
export const ApplyTruckQuantity = styled.input`
    height: 50px;
    width: 250px;
    box-sizing: border-box;

    position: absolute;
    left: 30px;
    right: 272px;
    

    top: 105px;
    bottom: 142px;
    z-index:1;
    font-size:1.3rem;
    padding: 3px 5px;
    padding-left:50px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`
export const ApplyCity = styled.input`
    height: 50px;
    width: 250px;
    box-sizing: border-box;

    position: absolute;
    left: 305px;
    right: 0px;
    top: 200px;
    bottom: 142px;
    z-index:1;
  font-size:1.3rem;
  padding: 3px 5px;
  padding-left:50px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`
export const ApplyPhone = styled.input`
    height: 50px;
    width: 250px;
    box-sizing: border-box;

    position: absolute;
    left: 30px;
    right: 272px;
    top: 200px;
    
    bottom: 71px;
    z-index:1;
    font-size:1.3rem;
    padding: 3px 5px;
    padding-left:50px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`

export const ApplyEmail = styled.input`

    height: 60px;
    width: 525px;
    box-sizing: border-box;

    position: absolute;
    left: 30px;
    right: 0px;
    top: 300px;
    bottom: 71px;
    z-index:1;
    font-size:1.3rem;
    padding: 3px 5px;
    padding-left:50px;
    border: 2px solid #E1EAF1;
    border-radius: 7px;
`
export const ApplyFormBtn = styled.button`
    position: absolute;
    width: 310px;
    height: 48px;
    left: 140px;
    top: 400px;

    background: linear-gradient(180deg, #00FF01 0%, #5DD23D 100%);
    border-radius: 80px;

    &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           PAGE 5 ELEMENTS   (Steps)                                                                               ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ApplyPageTextContainer5 = styled.div`

   position: relative;
    overflow: hidden;
    width: 450px;
    height: 135px;

    //background: linear-gradient(180deg, #B1C9FF 0%, #6994F4 18.23%, #596D83 67.19%, #4D7EAF 100%);
    border: 0.25px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    
    
`

export const Column1e = styled.div`
    margin-bottom: 15px;
    margin-top: -250px;
    padding: 0 15px;
 
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        
        display: flex;
       align-items: center;
       padding: 0%;
       justify-content: center;
        zoom: 0.65;
    }
`;

export const Column2e = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.85;
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
        padding: 0%;
        margin-bottom: -200px;
       
    }
`;

export const Column3e = styled.div`
    margin-bottom: 15px;
    margin-top: 250px;
    padding: 0 15px;
    
    grid-area: col3;
    
    @media screen and (max-width: 768px) {
        zoom: 0.85;
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
        padding: 0%;
        margin-bottom: -200px;
       
    }
`;

export const ApplyPageDeco1e = styled.img`
    position: absolute;
    width: 144px;
    height: 55px;
    margin-top: -10px;
    margin-left: -25px;

    transform: matrix(1, 0, 0, .25, 0, 0);
`
export const ApplyPageDeco2e = styled.img`
    position: absolute;
    width: 159px;
    height: 60px;
    margin-left: 320px;
    //margin-right: -20px;
    margin-top: 87.5px;

    transform: matrix(1, 0, 0, .25, 0, 0);
`

export const Heading5 = styled.h1`
    
    width: 267px;
    height: 31px;
    margin-left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    position: relative;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 50px;
    /* or 94% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 45px;
    /* identical to box height, or 196% */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    justify-content: center;

    color: ${({lightText}) => (lightText ? '#fff' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle5 = styled.p`
    
    width: 400px;
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
  


    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    /* or 107% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
    margin-top: -75px;
    line-height: 15px;
    /* or 133% */
    justify-content: left;

    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;