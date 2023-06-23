import styled from 'styled-components';

export const PackMobContainer = styled.div`
    
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
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#ffffff')};
 
 
    @media screen and (max-width: 768px) {
        //top: 100px;
        height: 800px;  
      }
 
    
`;





export const PackMobButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 42.9078px 11.5px 43.0922px;
    white-space: nowrap;

    width: 310px;
    height: 50px;
    margin-top: 150px;
    cursor: pointer;
    font-family: "inter";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: flex-start;

    color: #FFFFFF;
    /* identical to box height */

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
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


export const PackWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
          height: 500px;  
        }

`;

export const PackRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    gap: 0px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-auto-rows: 0.5fr;
        position: absolute;
         margin-left: 50%;
        transform: translateX(-50%);
        gap: 0px;
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
       width: 500px;
        zoom: 0.7;
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

export const Column22 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
    grid-area: col2;
    
    @media screen and (max-width: 768px) {
        zoom: 0.9;
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
        padding: 0%;
        margin-bottom: 100px;
       
    }
`;

export const TextWrapper = styled.div`
    align-items: center;
    text-align: center;
    max-width: 540px;

`;

export const TopLine = styled.p`

    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
    font-style: normal;
    font-family: "inter";
    font-weight: 900;
    font-size: 36px;
    line-height: 28px;
    /* identical to box height, or 78% */
    margin-top: 10px;
    display: flex;
    align-items: center;

    color: #233152;
`;

export const Heading = styled.h1`
    
    width: 400px;
    height: 31px;
   
    
   
    font-style: normal;
    font-family: "inter";
    font-weight: 900;
    font-size: 48px;
    line-height: 40px;
    /* or 83% */

    display: flex;
    align-items: center;

    color: #233152;
    @media screen and (max-width: 768px) {
      

     align-items: center;
   
     justify-content: center;
 

  }


`;

export const Subtitle = styled.p`
    
    width: 600px;
    height: 100px;
    //margin-top: 10px;
    //margin-bottom: 30px;

    font-style: normal;
    font-family: "inter";
    font-weight: 400;
    font-size: 17.5008px;
    line-height: 28px;

    display: flex;
    align-items: left;
    text-align: left;

    color: #747C82;
    @media screen and (max-width: 640px) {
        width: 500px;
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
    width: ${({lxw}) => (lxw ? '600px' : '800px')};
    height: ${({lxw}) => (lxw ? '565px' : '700px')};
   
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-left: ${({marg}) => (marg ? '-40px' : '0px')};
    @media screen and (max-width: 768px) {
        margin-left: ${({marg}) => (marg ? '-50px' : '0px')};
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;
