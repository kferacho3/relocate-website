import styled from 'styled-components';



export const BookMoveContainerImg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  
`

export const BookMoveContainer = styled.div`
    height: 100%;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: relative;
    overflow-x: hidden;
`;

export const initalState = {
    //text inputs
    packers: '',
    service: '',

    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    locations: [
    ],


    selectedRooms: [],

    selectedHeavy: [],

    date: '',

    time: '',
  
    
  };
