import styled from 'styled-components';
export const HeroInfoSection = styled.div`
  
    overflow: hidden;
    width: 100vw;
    height: 835px;
    //background: #94DC9C;
    
    background: linear-gradient(180deg, #376392 0%, #94DC9C 30.21%, #94DC9C 76.04%, #376392 100%);
   //background: conic-gradient(from 180deg at 50% 50%, #376392 -58.88deg, #376392 56.98deg, #94DC9C 91.96deg, #376392 135.85deg, #376392 166.63deg, #376392 200.61deg, #376392 222.09deg, #94DC9C 278.45deg, #376392 301.12deg, #376392 416.98deg);
    @media screen and (max-width: 768px) {
        height: 1400px;
   }
`

export const HeroInfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const HeroInfoRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 75px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};
    z-index: 999;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
        margin-left: 50%;
        transform: translateX(-100%);
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3'`)};
    } 
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        zoom: 0.75;
   }
`;

export const Column2 = styled.div`
    margin-bottom: 115px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        zoom: 0.7;
   }
    
`;
export const Column22 = styled.div`
    margin-top: 115px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        zoom: 0.75;
        margin-bottom: 15px;
   }
    
`;
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
    @media screen and (max-width: 768px) {
        zoom: 0.75;
   }
    
`;

export const HeroInfoHeader = styled.h2`
 
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
export const HeroInfoTextSection = styled.div`
    width: 386px;
    height: 379px;
    position: relative;
    overflow: hidden;

    background: linear-gradient(180deg, #B1C9FF 0%, #6994F4 18.23%, #596D83 67.19%, #4D7EAF 100%);
    //border: 0.25px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  // background: conic-gradient(from 180deg at 50% 50%, #376392 -58.88deg, #376392 56.98deg, #94DC9C 91.96deg, #376392 135.85deg, #376392 159.91deg, #94DC9C 179.88deg, #376392 198.1deg, #376392 222.09deg, #94DC9C 278.45deg, #376392 301.12deg, #376392 416.98deg);
  

`

export const HeroInfoIcon = styled.img`
    
    width: 100%;
    height: 100%;
    
    

`
export const HeroInfoIconWrap = styled.div`
    width: 100px;
    height: 100px;

    margin-top: 25px;
    margin-left: 50%;
    transform: translateX(-50%);


`
export const HeroInfoTextHeader = styled.p`
   
    height: 31px;
    white-space: nowrap;
    margin-left: 50%;
    transform: translateX(-50%);
   margin-top: 10px;
   font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    /* or 94% */

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: #ffffff;
`
export const HeroInfoText = styled.p`

    width: 350px;
    height: 146px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: -30px;
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.5008px;
    line-height: 20px;
    /* or 166% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
    margin-top: 30px;
`
export const HeroInfoButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 11.5px 42.9078px 11.5px 43.0922px;
    
    margin-left: 50%;
    transform: translateX(-50%);
    font-family: "inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    white-space: nowrap;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.248px;

    color: #FFFFFF;
    width: 247px;
    height: 63px;


    background: linear-gradient(180deg, #279F85 0%, #3965C8 100%);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 80px;
    
    &:hover {
        opacity: calc(.7);
        transition: all 100ms ease-in-out;
}
`
export const HeroInfoBg = styled.img`
    position: absolute;
    justify-content: center;
    margin-left: -60px;
    margin-top: -60px;
    z-index: -1;
    width: 479.17px;
    height: 520.37px;
    

`
export const HeroDeco1 = styled.img`
    position: absolute;
    width: 190px;
    height: 60px;
    margin-top: 10px;
    margin-left: -50px;

    transform: matrix(1, 0, 0, .5, 0, 0);
`
export const HeroDeco2 = styled.img`
    position: absolute;
    width: 190px;
    height: 60px;
    margin-left: 250px;
    //margin-right: -20px;
    margin-top: -50px;

    transform: matrix(1, 0, 0, .5, 0, 0);
    `