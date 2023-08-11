import styled, { createGlobalStyle, css } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    /*font-family: Arial, Helvetica, sans-serif;*/
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  /*
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  */
`;

export const ApplyFormContainer = styled.div`
position: relative;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 150vh;
  padding: 0 20px;
`;

export const ApplyForm = styled.form`
  width: 100%;
  color: #fff;
  max-width: 700px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const ApplyFormInput = styled.input`
  display: block;
  width: 100%;
  color: #000;

  ${sharedStyles}
`;

export const ApplyFormTextArea = styled.input`
  background-color: #eee;
  width: 100%;
  color: #000;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const ApplyFormButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  &:not([disabled]):focus,
  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 255, 1, 0.5),
      -0.125rem -0.125rem 1rem rgba(33, 130, 7, 0.5),
      0.125rem 0.125rem 1rem rgba(31, 82, 16, 0.5);
  }
`;

export const ApplyFormFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #fff;
  padding: 20px;
  line-height: 25px;
  margin: 20px 0;
  legend {
    padding: 0 20px;
    color: #fff;
  }
  label {
    padding-right: 20px;
    color: #fff;
  }
  input {
    margin-right: 10px;
    color: #fff;
  }
`;

export const ApplyFormError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const initialState = {
  name: '',
  email: '',
  message: '',
  service: '',
  website: ''
};
export const ContactImg = styled.div`
    top: 60%;
    left: 50%;
    height: 500px;
    width: 600px;
    margin-right: -50%;
    transform: translate(-225%, 80%);
    position: absolute;
    
    border-top: 3px solid transparent;
    border-radius: 25px;
  // background-image: url('../../images/cthulu.gif');
    @media screen and (max-width: 850px) {
    align-items: center;
        display:block;
    position: absolute;
    left: 150%;


}
`;