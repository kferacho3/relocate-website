

import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.div`

  height: 20px;
  display: flex;
  
`;

export const NavIcon = styled(LinkR)`

    display: none;
    margin-right: 50px;

   
    @media screen and (max-width: 870px) {
        font-size: 2rem;
        height: 80px;
        z-index: 9999;
        display: flex;
        }   

 
 
`;

export const SidebarNav = styled.nav`
  margin-top: 185%;
  background: #218207;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999999;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;


export const SidebarLink = styled(LinkR)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #545b35;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(LinkR)`
  background: #000;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #545b35;
    cursor: pointer;
  }
`;