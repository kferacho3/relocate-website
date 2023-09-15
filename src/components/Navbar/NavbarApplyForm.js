import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/navbarLogo.svg';
import { SidebarData } from '../Sidebar/SidebarData';
import { SideIcon, SidebarNav, SidebarWrap } from '../Sidebar/SidebarElements';
import SubMenu from '../Sidebar/SubMenu';
import Dropdown from './Dropdown';
import { About, Contact, Services } from './MenuItems';
import "./Navbar.scss";
import {
    ArrowDropdown,
    Nav,
    NavBotBtn,
    NavBotBtn2,
    NavBotBtn3,
    NavBottom2,
    NavBtn,
    NavBtnWrap,
    NavEnd,
    NavItem,
    NavLinks,
    NavLogoCont,
    NavMenu,
    NavNumber,
    NavbarContainer,
    Pacman
} from './NavbarElements';
import { NavHam } from './navHam';
const Navbar2 = ({ toggle}) => {
  
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [pacmanColor, setPacmanColor] = useState('#376392');
    const [dropDownSwitch, setDropDownSwitch] = useState('0deg');
    const [activeDropdown, setActiveDropdown] = useState(null); // Active dropdown state
    const [dropdwonColor, setDropdownColor] = useState('#376392');
    const [dropdwonColor2, setDropdownColor2] = useState('#376392');
    const [dropdwonColor3, setDropdownColor3] = useState('#376392');
    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };
    const [scrollNav, setScrollNav] = useState(false)
    const [isOpen, setOpen] = useState(false);
    const openDropdown = (dropdownName) => {
        setActiveDropdown(dropdownName);
    };
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
                            <NavItem>
                                <NavLinks
                                 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                    onClick={() => {
                                        setDropdownColor('#218207');
                                        toggleDropdown('about');
                                        closeMobileMenu();
                                    }}
                                    onMouseEnter={() => {
                                        setDropdownColor('#218207');
                                    }}
                                    onMouseLeave={() => {
                                        setDropdownColor('#376392');
                                    }}
                                >
                                    About{' '}
                                    <ArrowDropdown
                                        style={{
                                            transition: 'transform 0.3s ease, color 0.3s var(--_s, 0s) linear',
                                            '--_s': '0.3s',
                                            transform: `rotate(${activeDropdown === 'about' ? '180deg' : '0deg'})`,
                                            color: dropdwonColor,
                                            fontSize: `16.5px`
                                        }}
                                    />
                                </NavLinks>
                                {activeDropdown === 'about' && <Dropdown items={About} />}
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                    onClick={() => {
                                        setDropdownColor2('#218207');
                                        toggleDropdown('services');
                                        closeMobileMenu();
                                    }}
                                    onMouseEnter={() => {
                                        setDropdownColor2('#218207');
                                    }}
                                    onMouseLeave={() => {
                                        setDropdownColor2('#376392');
                                    }}
                                >
                                    Services{' '}
                                    <ArrowDropdown
                                        style={{
                                            transition: 'transform 0.3s ease, color 0.3s var(--_s, 0s) linear',
                                            '--_s': '0.3s',
                                            transform: `rotate(${activeDropdown === 'services' ? '180deg' : '0deg'})`,
                                            color: dropdwonColor2,
                                            fontSize: `16.5px`
                                        }}
                                    />
                                </NavLinks>
                                {activeDropdown === 'services' && <Dropdown items={Services} />}
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='/pack'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                    onClick={() => {
                                        setDropdown(!dropdown);
                                        setPacmanColor('#218207');
                                        setDropDownSwitch(dropDownSwitch === '180deg' ? '0deg' : '180deg');
                                    }}
                                    onMouseEnter={() => {
                                        setPacmanColor('#218207');
                                    }}
                                    onMouseLeave={() => {
                                        setPacmanColor('#376392');
                                    }}
                                >
                                    <Pacman
                                        style={{
                                            transition: 'color 0.3s var(--_s, 0s) linear',
                                            '--_s': '0.3s',
                                            color: pacmanColor,
                                            fontSize: `16.5px`
                                        }}
                                    />
                                    Join the Pack!
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                    onClick={() => {
                                        toggleDropdown('contact');
                                        closeMobileMenu();
                                        setDropdownColor3('#218207');
                                    }}
                                    onMouseEnter={() => {
                                        setDropdownColor3('#218207');
                                    }}
                                    onMouseLeave={() => {
                                        setDropdownColor3('#376392');
                                    }}
                                >
                                    Contact Us{' '}
                                    <ArrowDropdown
                                        style={{
                                            transition: 'transform 0.3s ease, color 0.3s var(--_s, 0s) linear',
                                            '--_s': '0.3s',
                                            transform: `rotate(${activeDropdown === 'contact' ? '180deg' : '0deg'})`,
                                            color: dropdwonColor3,
                                            fontSize: `16.5px`
                                        }}
                                    />
                                </NavLinks>
                                {activeDropdown === 'contact' && <Dropdown items={Contact} />}
                            </NavItem>
                        </NavMenu>
                    <NavEnd>
                    <NavItem>
                        <NavNumber>+1-(312)-933-4773</NavNumber>
                        <NavBtn  to='/book' >
                            BOOK NOW 
                        </NavBtn>
                    </NavItem>
                    </NavEnd>
               

                <NavBottom2>
                    <NavBtnWrap>
                        <NavBotBtn >Apply To Position</NavBotBtn>
                        <NavBotBtn2 >Upload resume from Indeed</NavBotBtn2>
                        <NavBotBtn3 >Upload resume from LinkedIn</NavBotBtn3>
                    </NavBtnWrap>
                </NavBottom2>
              



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

export default Navbar2;