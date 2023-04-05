import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../images/navbarLogo.svg';
import pac from '../../images/pacman-svg.svg';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Sidebar/SidebarData';

import {   SidebarNav, SidebarWrap, SideIcon} from '../Sidebar/SidebarElements';
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
     NavIcon,
     NavNumber,
     NavBottom,
     NavBottomText,
     NavBottomText2,
     NavBottomTextSection
} from './NavbarElements';
import * as ImIcons from 'react-icons/im';
import { NavLink } from 'react-router-dom';
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
        <IconContext.Provider style={{ zIndex:`999999` }} value={{ color: '#fff'}}>
        <Nav style={{ zIndex:`999999` }} scrollNav={scrollNav}>
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
                        <NavLinks to='/pack'  smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'> <ImIcons.ImPacman style={{ color:`#376392` }}/>Join the Pack!</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/book' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Book Move</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavNumber>+1-(312)-933-4773</NavNumber>
                        <NavBtn >
                            BOOK NOW 
                        </NavBtn>
                    </NavItem>
                    
                </NavMenu>

                <NavBottom>
                    <NavBottomTextSection>
                        <NavBottomText>WE ARE HIRING MOVERS & DRIVERS!  <NavBottomText2>Click here to apply!</NavBottomText2></NavBottomText>
                    </NavBottomTextSection>
                </NavBottom>



                <SideIcon style={{ color: '#000' }} to='#'>
                        <FaBars style={{ color: '#218207' }} onClick={showSidebar} />
                </SideIcon>
          
                <SidebarNav onClick={showSidebar} sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon  to='#'>
                        <AiIcons.AiOutlineClose style={{ fontSize: '72px' }}  onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                        return <SubMenu  item={item} key={index} />;
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
