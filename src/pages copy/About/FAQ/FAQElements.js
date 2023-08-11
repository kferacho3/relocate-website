import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  padding: 4rem;
  width: 48rem;
  height: 100vh;
`;

export const AccordionWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button`
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: #1f5210; /* Use the provided green color */
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #00ff01; /* Use the provided dark green color */

    &::after {
      cursor: pointer;
      color: #00ff01; /* Use the provided dark green color */
      border: 1px solid #00ff01; /* Use the provided dark green color */
    }
  }
`;

export const AccordionTitle = styled.span`
  padding: 1em 1.5em 1em 0;
`;

export const Icon = styled.span`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;

  &::before {
    display: block;
    position: absolute;
    content: '';
    top: 9px;
    left: 5px;
    width: 10px;
    height: 2px;
    background: currentColor;
  }

  &::after {
    display: block;
    position: absolute;
    content: '';
    top: 5px;
    left: 9px;
    width: 2px;
    height: 10px;
    background: currentColor;
  }
`;

export const AccordionContent = styled.div`
  opacity: ${(props) => (props.expanded ? '1' : '0')};
  max-height: ${(props) => (props.expanded ? '9em' : '0')};
  overflow: hidden;
  transition: all 200ms linear;
  will-change: opacity, max-height;
  flex: ${(props) => (props.expanded ? '1' : '0')}; /* Push other items when expanded */

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
  }
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
