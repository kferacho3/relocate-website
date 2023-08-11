import styled from 'styled-components';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Help Hero ELEMENTS                                                                                  ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const HelpHeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #fff;    
    height: 700px;
    top: 120px;
    width: 100vw;
    border-radius: 0px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#ffffff')};
 
 
    @media screen and (max-width: 768px) {
        //top: 100px;
        height: 1100px;  
      }
 
    
`;





export const HelpHeroButton = styled.button`
  
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
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`


export const HelpHeroWrapper = styled.div`
   
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

export const HelpHeroRow = styled.div`
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

export const HelpHeroColumn1 = styled.div`
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

export const HelpHeroColumn2 = styled.div`
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


export const HelpHeroTextWrapper = styled.div`
    align-items: center;
    text-align: center;
    max-width: 540px;

`;

export const HelpHeroTopLine = styled.p`

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

export const HelpHeroHeading = styled.h1`
    
    width: 600px;
    height: 31px;
   
    
    font-style: normal;
    font-family: "inter";
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

export const HelpHeroSubtitle = styled.p`
    
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

export const HelpHeroBtnWrap = styled.div`

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

export const HelpHeroImgWrap = styled.div`
    width: 600px;
    height: 450px;
    

`;

export const HelpHeroImg = styled.img`
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
//*                           Help Resources ELEMENTS                                                                                  ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export const HelpResourceContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #fff;    
    height: 600px;
    width: 100vw;
    border-radius: 0px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#ffffff')};
 
 
    @media screen and (max-width: 768px) {
        //top: 100px;
        height: 1100px;  
      }
 
    
`;






export const HelpResourceButton = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 13.8px 8px 14px;
    margin-bottom: 175px;
    width: 97.8px;
    height: 40px;
    margin-top: 25px;
    margin-left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    -webkit-user-select: none;
    touch-action: manipulation;
    background: ${({btnCol}) => (btnCol ? '#00FF01' : '#6994F4')};
    border: ${({btnCol}) => (btnCol ? '#00FF01' : '#6994F4')};

    box-shadow: 4px 4px 4px #000000, 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;


    /*FONT*/

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    text-align: center;
      white-space: nowrap;
    color: #000000;

    &:hover {
        opacity: calc(.7);
        transition: all 100ms ease-in-out;
}
`



export const HelpResourceWrapper = styled.div`
   
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

export const HelpResourceRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 50px;
   justify-content: center;
   align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

    @media screen and (max-width: 768px) {
        margin-top: -100px;
        grid-auto-rows: 1fr;
         margin-left: 50%;
        transform: translateX(-50%);
        gap: 50px;
        grid-template-areas: 'col3' 'col2' 'col1';   
        }
`;

export const HelpResourceColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    @media screen and (max-width: 768px) {
      
        zoom: 0.7;

    }
`;

export const HelpResourceColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.7;
 
       
    }
`;

export const HelpResourceColumn3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
    
    @media screen and (max-width: 768px) {
        zoom: 0.7;
       
    }
`;


export const HelpResourceTextWrapper = styled.div`
    align-items: center;
    text-align: center;
    max-width: 540px;

`;

export const HelpResourceTopLine = styled.p`

    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
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

export const HelpResourceHeading = styled.h1`
    
    height: 29px;
    margin-left: 50%;
    margin-bottom: 35px;
    transform: translateX(-50%);
    white-space: nowrap;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height, or 120% */

    align-items: center;
    text-align: center;

    color: #1B1C1D;
    @media screen and (max-width: 768px) {
      

     align-items: center;
   
     justify-content: left;
 
     margin-top: -200px;

  }


`;

export const HelpResourceSubtitle = styled.p`
    
    margin-top: 10px;
    margin-bottom: 35px;

    


    width: 378px;
    height: 24px;
 

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    align-items: center;
    text-align: center;

    color: #1B1C1D;

    color: #000000;
    @media screen and (max-width: 768px) {
       width: 400px;
    }
`;

export const HelpResourceBtnWrap = styled.div`

    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 640px) {
        align-items: center;
        display:block;
        margin: auto;
    }
    
`

export const HelpResourceImgWrap = styled.div`
    width: 282.5px;
    height: 282.36px;
    
    margin-left: 50%;
    transform: translateX(-50%);

`;

export const HelpResourceImg = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;

