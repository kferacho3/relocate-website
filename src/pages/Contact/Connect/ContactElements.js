/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Contact Hero ELEMENTS                                                                                     ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




import styled from 'styled-components';

export const ContactUsContainer = styled.div`
    
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





export const ContactUsButton = styled.button`
  
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
    
    &:hover {
        opacity: calc(.7);
        transition: all 100ms ease-in-out;
}
`


export const ContactUsWrapper = styled.div`
   
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

export const ContactUsRow = styled.div`
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

export const Column1 = styled.div`
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

export const Column2 = styled.div`
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


export const TextWrapper = styled.div`
    align-items: center;
    text-align: center;
    max-width: 540px;

`;

export const TopLine = styled.p`

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

export const Heading = styled.h1`
    
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

export const Subtitle = styled.p`
    
    width: 600px;
    height: 122px;
    margin-top: 10px;
    margin-bottom: 0px;

    

    font-family: "inter";
    font-style: normal;
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

export const BtnWrap = styled.div`

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

export const ImgWrap = styled.div`
    width: 600px;
    height: 450px;
    

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-top: -100px;
    @media screen and (max-width: 768px) {

         }
`;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           PopUp ELEMENTS                                                                                          ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const PopUpFormContainer = styled.div`
    width: 1350px;
    height: 700px;
    //top: 186px;
    position: fixed;
    background: #376392;
    border-radius: 30px;
    z-index: 9999999999999;
    //margin-top: 50%;
   left: 50%;
    transform: translate(-50%, 0%);
    bottom: 75px;
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


export const PopUpHeader = styled.h1`
  
    position: absolute;
    width: 85.31px;
    height: 20px;
    left: 0px;
    top: 420.28px;
    white-space: nowrap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    /* or 130% */

    display: flex;
    align-items: center;
    letter-spacing: -0.3px;

    color: #FFFFFF;
    @media screen and (max-width: 870px) {
       zoom: 0.9;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.8;
       
        } 
`

export const PopUpTopLine =styled.h2`
    position: absolute;
    width: 350.5px;
    height: 49px;
    left: 0px;
    top: 500.47px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 46px;
    /* or 130% */

    display: flex;
    align-items: center;
    letter-spacing: -1.6px;

    color: #FFFFFF;
    @media screen and (max-width: 870px) {
       zoom: 0.95;
       
        }  
        @media screen and (max-width: 640px) {
            zoom: 0.9;
       
        } 
`

export const PopUpForm = styled.form`
    zoom: 0.9;
    display: grid;
    margin-top: 50px;
    gap: 50px;
    grid-template-areas: 'col1' 'col2';
`

export const PopUpButtonWrap = styled.div`
    position: absolute;
    width: 958.5px;
    height: 67px;
    top: 87.5%;
    left: 50%;
    transform: translateX(-50%);

`

export const PopUpLeftButton = styled.button`

    width: 200px;
    height: 67px;
    left: 281.62px;
    top: 939px;
    border: none;
    cursor: pointer;
    background: linear-gradient(180deg, #16D3A9 0%, #00FF01 100%);
    box-shadow: 1px 1px 25px rgba(14, 34, 64, 0.15);
    border-radius: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;

    color: #FFFFFF;
`

export const PopUpRightButton = styled.button`
    position: absolute;
    width: 200px;
    height: 67px;
    right: 0%;
    cursor: pointer;
    border: none;
    background: linear-gradient(180deg, #16D3A9 0%, #00FF01 100%);
    box-shadow: 1px 1px 25px rgba(14, 34, 64, 0.15);
    border-radius: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;

    color: #FFFFFF;
`

export const Col1P = styled.div`


    
`
export const Col2P = styled.div`



`

export const PopUpImgWrap = styled.div`


`
export const PopUpImg = styled.img`

`


export const PopUpTopLine2 = styled.p`
    position: absolute;
    width: 85.31px;
    height: 20px;
    left: 0px;
    top: 445.28px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    /* or 130% */

    display: flex;
    align-items: center;
    letter-spacing: -0.3px;

    color: #FFFFFF;

`

export const PopUpSubtitle = styled.p`

    position: absolute;
    width: 568px;
    height: 47px;
    left: 0px;
    
    top: 450px;


    font-family: "inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    /* or 153% */

    display: flex;
    align-items: center;
    letter-spacing: -0.22px;

    color: #D9D9D9;

`

export const PopUpTopLine3 = styled.p`
    position: absolute;
    width: 240.81px;
    height: 20px;
    left: 0px;
    top: 620.97px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    /* or 130% */

    display: flex;
    align-items: center;
    letter-spacing: -0.3px;

    color: #EEEEEE;
`

export const PopUpContentWrap = styled.div`

    position: absolute;
    width: 562px;
    height: 693px;
    left: 58px;
    top: 50px;

`

export const InputWrap = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(0%);
    width: 625px;
    top: 20px;
`
export const PName = styled.input.attrs(props => ({
    type: 'text'

}))`
    box-sizing: border-box;

    position: absolute;
    width: 625px;
    height: 40px;
    top: 45px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

    background: #FBFBFC;
    border: 1px solid rgba(185, 192, 203, 0.22);
   

`

export const PReason = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 625px;
    height: 100px;
    top: 105px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PPhone = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 625px;
    height: 40px;
    top: 225px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PEmail = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 625px;
    height: 40px;
    top: 285px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PMessage = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 625px;
    height: 250px;
    top: 350px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PButton = styled.button`
    position: absolute;
    width: 300px;
    height: 40px;
    top: 625px;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */
    align-items: center;

    color: #FFFFFF;
    background: linear-gradient(180deg, #00FF01 0%, #40E314 100%);
    cursor: pointer;
    z-index: 5;


`

export const PExit = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 95%;
    top: -2px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
`








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Help ELEMENTS                                                                                           ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Move Prep ELEMENTS                                                                                      ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const HeadingBg = styled.img`
    width: 566px;
    height: 103px;


    left: 703px;
    right: 243px;
    top: calc(50% - 103px/2 - 1993px);
`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Move PrepTips ELEMENTS                                                                                      ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
    @media screen and (max-width: 768px) {
      
        position: absolute;
       align-items: center;
     
       justify-content: center;
       width: 500px;
        zoom: 0.7;
        margin-left: 50%;
        transform: translateX(-50%);

    }
`;