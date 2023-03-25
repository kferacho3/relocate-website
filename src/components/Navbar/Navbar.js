import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../images/navbarLogo.svg';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Sidebar/SidebarData';

import {   SidebarNav, SidebarWrap} from '../Sidebar/SidebarElements';
import SubMenu from '../Sidebar/SubMenu';
import "./Navbar.scss";
import {
     Nav, 
     NavbarContainer, 
     NavLogoCont,
     NavMenu, 
     NavItem,
     NavLinks, 
     NavBtn,
     NavNumber,
     NavBottom,
     NavBottomText
} from './NavbarElements';

import { NavIcon } from '../Sidebar/SidebarElements';
const Navbar = ({ toggle}) => {
  
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 10) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogoCont style={{ backgroundImage:`url(${logo})` }} to='/' onClick={toggleHome} ></NavLogoCont>
              

             

                <NavMenu>
                    <NavItem >
                        <NavLinks to='/' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Home</NavLinks>
                    </NavItem>
                    <NavItem >
                        <NavLinks to='/services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</NavLinks>
                    </NavItem>
                    <NavItem >
                        <NavLinks to='/locations' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Locations</NavLinks>
                    </NavItem>

                    <NavItem >
                        <NavLinks to='/pack'  smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Join the Pack!</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/book' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Book Move</NavLinks>
                    </NavItem>

                    <NavItem>
                    <NavNumber>+1-(234)-567-8910</NavNumber>
                    </NavItem>
                    
                </NavMenu>


<NavBtn >
BOOK NOW 
</NavBtn>
<NavBottom>
    <NavBottomText>WE ARE HIRING MOVERS & DRIVERS!</NavBottomText>
    <NavBottomText style={{ color:`#218207` }}>Click here to apply!</NavBottomText>
</NavBottom>
                <NavIcon style={{ color: '#000' }} to='#'>
                        <FaBars style={{ color: '#8ca12c' }} onClick={showSidebar} />
                </NavIcon>
                 
                <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                    <AiIcons.AiOutlineClose  onClick={showSidebar} />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
                </SidebarNav>

            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
