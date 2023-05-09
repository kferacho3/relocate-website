import React, { useEffect, useState } from 'react';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons/lib';
import { Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/navbarLogo.svg';
import { SidebarData } from '../Sidebar/SidebarData';
import { SideIcon, SidebarNav, SidebarWrap } from '../Sidebar/SidebarElements';
import SubMenu from '../Sidebar/SubMenu';
import "./Navbar.scss";
import {
    Nav,
    NavBottom3,
    NavBtn,
    NavBtnWrap2,
    NavCarrier,
    NavDriver,
    NavHandman,
    NavItem,
    NavLinks,
    NavLogoCont,
    NavMenu,
    NavNumber,
    NavPacker,
    NavPackman,
    NavbarContainer
} from './NavbarElements';
import { NavHam } from './navHam';
const Navbar3 = ({ toggle}) => {
  
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [scrollNav, setScrollNav] = useState(false)
    const [isOpen, setOpen] = useState(false);
    const changeHam = () =>  setOpen(isOpen);
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

                <NavBottom3>
                    <NavBtnWrap2>
                        <NavPacker to='/applyInfoNav/applyPacker'>Packer</NavPacker>
                        <NavDriver to='/applyInfoNav/applyDriver'>Driver</NavDriver>
                        <NavHandman to='/applyInfoNav/applyHandman'>Hand-man</NavHandman>
                        <NavPackman to='/applyInfoNav/applyPackman'>Pack-man</NavPackman>  
                        <NavCarrier to='/applyInfoNav/applyCarrier'>Carrier</NavCarrier> 
                    </NavBtnWrap2>
                </NavBottom3>
              



                <SideIcon style={{ color: 'linear-gradient(180deg, #00FF01 0%, #218207 100%)'}} to='#' onClick={showSidebar}>
                        <NavHam  isOpen={isOpen} toggle={() => setOpen(!isOpen)} style={{ color: 'linear-gradient(180deg, #00FF01 0%, #218207 100%)' }}  />
                </SideIcon>
          
         
            </NavbarContainer>
            <Outlet/>
       
        </Nav>
        {isOpen && (
            <SidebarNav onClick={ () => { showSidebar(); setOpen();} } isOpen={isOpen} sidebar={sidebar}>
                    <SidebarWrap>
                    
                        {SidebarData.map((item, index) => {
                        return <SubMenu  item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
      )}
      
        </IconContext.Provider>
        </>
    );
};

export default Navbar3;