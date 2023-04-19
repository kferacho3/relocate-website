import styled from 'styled-components';



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
  
    width: 657px;
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

export const HomeTopline =styled.h2`
    margin-left: 50%;
    transform: translateX(-50%);

    width: 504px;
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

export const Col1 = styled.div`


    
`
export const Col2 = styled.div`



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
    margin-left: 20px;
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
    margin-top: -50px;
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


