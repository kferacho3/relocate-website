import styled from 'styled-components';
export const AccordionSection = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  height: 100vh;
`;

export const Container = styled.div`

  align-items: start;
  width: 60%;
  text-align: center;
  
  position: relative;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  @media screen and (max-width: 640px) {
    width: 100%;
    
}
`;

export const Wrap = styled.div`

  //00FF01
  //1F5210
  background: #1F5210;
  overflow: hidden;
  margin-top: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
  h1 {
    text-align: center;
    padding: 2rem;
    text-shadow: 2px 2px #00FF01;
    font-size: 3rem;
    font-weight: 900;
    position: relative;
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
  }
  span {
    margin-right: 1.5rem;
    position: relative;
  }
  }

  
`;

export const Dropdown = styled.div`
  background: #00FF01;
  color: #fff;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00FF01;
  border-top: 1px solid #00FF01;
  position: relative;
  p {
    font-size: 1.5rem;
    width: 80%;
    
  }

  @media screen and (max-width: 768px) {
    p{
    font-size: 1rem;
    align-items: center;
		
		display:block;
			
		margin: auto;
    }
    
}
`;

export const FAQHeader = styled.h1`
    margin: 0 auto;
    margin-top: 200px;
    position: relative;
    font-size: 8rem;
    color: #000;
    text-shadow: 5px 5px #00FF01;
    text-align: center;
    justify-content: center;
    align-items: center;

`

export const FAQQuestion = styled.h1`


`
export const FAQAnswer = styled.p`


`
export const FAQCaption = styled.p`
   color: #fff;
    text-shadow: 1px 1px #000;
    font-size: 0.8rem;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 0.36rem;
        align-items: center;
		display:block;
    
}

`




export const AccContainer = styled.div`
  
    
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    position: relative;
    z-index: 999999999999999;

`;

export const AccCarBg = styled.div`
    position: absolute;

    top: 0;
    right: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`;

export const Img = styled.img`
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 768px) {
        height: 300px;
width: 100%;
    }
`;

export const AccH1 = styled.h1`
color: #fff;
font-size: 8rem;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -80%);
text-shadow: 5px 5px #00FF01;

z-index: 99999;
  
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;