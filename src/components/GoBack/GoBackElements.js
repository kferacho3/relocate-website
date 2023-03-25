import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const GoBackContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 9999999999;
    width: 300px;
    height: 206px;
    right: 0px;
    top: 70%;

    overflow-x: hidden;
    @media screen and (max-width: 1200px) {
       zoom: 0.75;

    }
    @media screen and (max-width: 850px) {
       zoom: 0.6;

    }
 
    @media screen and (max-width: 550px) {
       zoom: 0.33;
       //transform: rotate(90deg) translate(775%, -150%);
      top: 80%;
   
  

    }


`





export const GoBackText = styled.p`


    position: absolute;
    left: -110%;
    top: -10%;
    bottom: 0%;
    white-space: nowrap;
    pointer-events: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 17px;
    /* or 53% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-90deg);

`

export const GoBackIcon = styled(LinkR)`
   
    width: 294px;
    height: 206px;
    left: 11.43%;
    right: 34.29%;
    top: 25.3%;
    bottom: -8.05%;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   
    background-repeat: no-repeat;
    background-size: cover;
    &:hover {
        transform: scale(1.02);
    }

`


export const GButtonText = styled.p`
    position: absolute;
    left: 25%;
    top: 55%;
    @media screen and (max-width: 1200px) {
       zoom: 0.75;

    }
    @media screen and (max-width: 850px) {
       zoom: 0.6;

    }
 
    @media screen and (max-width: 550px) {
   
       //transform: rotate(90deg) translate(775%, -150%);
      
      
  zoom: 0.33;

    }
  
  
    
`

