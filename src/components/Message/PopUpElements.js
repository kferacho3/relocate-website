import styled from 'styled-components';




export const PopupMessage = styled.form`
    box-sizing: border-box;
    position: fixed;
    width: 500px;
    height: 350px;
    left: 50%;
    transform: translateX(-50%);
    top: 200px;

    background: rgba(255, 255, 255, .90);
    border: 10px solid rgba(139, 159, 44, 0.75);
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    @media screen and (max-width: 550px) {
       zoom: 0.8;
  
  

    }

`




export const PopupMTop = styled.div`
    position: absolute;
    height: 49px;
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    /* or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;
    background: #8B9F2C;


`


export const PName = styled.input.attrs(props => ({
    type: 'text'

}))`
    box-sizing: border-box;

    position: absolute;
    width: 325px;
    height: 38px;
    left: 50%;
    transform: translateX(-50%);
    top: 45px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;
   

`

export const PPhone = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 325px;
    height: 38px;
    left: 50%;
    transform: translateX(-50%);
    top: 90px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PEmail = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 325px;
    height: 38px;
    left: 50%;
    transform: translateX(-50%);
    top: 135px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PMessage = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 450px;
    height: 125px;
    left: 50%;
    transform: translateX(-50%);
    top: 185px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const PButton = styled.button`
    position: absolute;
    height: 40px;
    left: 50%;
    transform: translateX(-50%);
    top: 350px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    background: #8B9F2C;
    cursor: pointer;
    z-index: 5;


`

export const PExit = styled.div`
    position: absolute;
    width: 38px;
    height: 41px;
    left: 430px;
    top: -2px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
`