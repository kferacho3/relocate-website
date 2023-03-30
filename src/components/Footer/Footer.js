import React from 'react'
import "./Footer.scss";
import { 
    FooterContainer,
    FooterWrapper,
    FooterRow,
    FooterText,
    FooterLeftContainer,
    FooterMidContainer,
    FooterRightContainer,
    FooterLinksContainer,
    FooterTopLine,
    FooterLinkTitle,
    FooterIcon,
    FooterLinksWrapper,
    SocialLogo, 
    SocialLogoWrap,
    SocialMediaWrap,
    FooterLeftHead,
    FooterLeftAddress,
    FooterLeftEmail,
    FooterLeftButton,
    FooterLeftNumber,
    FooterBottomLine,
    FooterBottomLeftContainer,
    FooterBottomSection,
    FooterMainContainer,
    WebsiteRights,
    WebsiteTermsPolicy

   
  } from './FooterElements';


import fb from './FooterImg/Facebook.svg'
import ig from './FooterImg/Instagram.svg'
import ldin from './FooterImg/LinkdIn.svg'
import tw from './FooterImg/Twitter.svg'
import yt from './FooterImg/Youtube.svg'
import logo from './FooterImg/footerLogo.svg'



const Footer = () => {

   
 
    /*
    const handleClick1 = () => {
        window.open("https://www.facebook.com/kmrenovations2020");
      };*/


      //handles timed popup by eliminating raapid popup (useeffect helps)
      


    return (
        <FooterContainer  >
         <FooterMainContainer>
         <FooterTopLine/>
              
            <FooterWrapper>
                <FooterRow>
                <FooterLeftContainer>
                <FooterLeftHead>CORPORATE HEADQUARTERS</FooterLeftHead>
                <FooterLeftAddress>Atl, Georgia</FooterLeftAddress>
                <FooterLeftEmail>relocate@gmail.com</FooterLeftEmail>
              <FooterLeftNumber>1-234-567-8910</FooterLeftNumber>
                <FooterLeftButton>BOOK A MOVE</FooterLeftButton>
                </FooterLeftContainer>

                  <FooterMidContainer>
                      
                    
                      <FooterLinksWrapper>
                            <FooterLinkTitle> Home </FooterLinkTitle>
                                  <FooterText to='about'>About Us</FooterText>
                                  <FooterText to='mission'>Mission Statement</FooterText>
                                  <FooterText to='services'>Services</FooterText>
                                  <FooterText to='how'>How It Works</FooterText>
                                  <FooterText to='market'>Market</FooterText>  
                                  <FooterText to='testimonials'>Testimonials</FooterText> 
                                  <FooterText to='book'>Book Now!</FooterText> 
                      </FooterLinksWrapper> 

                      <FooterLinksWrapper>
                            <FooterLinkTitle> Services </FooterLinkTitle>
                                <FooterText to='standard'>Standard Moving</FooterText>
                                  <FooterText to='packing'>Packing & Unpacking</FooterText>
                                  <FooterText to='hourly'>Hourly Labor</FooterText>
                                  <FooterText to='junk'>Junk Removal</FooterText>  
                                  <FooterText to='overnight'>Overnight Moves</FooterText> 
                                  <FooterText to='vip'>VIP Moving Service</FooterText>
                                  <FooterText to='storage'>Storage</FooterText>  
                                  <FooterText to='tv'>TV Mounting</FooterText> 
                      </FooterLinksWrapper> 

                      <FooterLinksWrapper>
                            <FooterLinkTitle> Locations </FooterLinkTitle>
                                  <FooterText to='atlanta'>Atlanta Market</FooterText>
                                  <FooterText to='chicago'>Chicago Market</FooterText>
                                  <FooterText to='geographic'>Geographic Planning</FooterText>
                                  <FooterText to='info'>Info</FooterText>  
                                  <FooterText to='book'></FooterText> 
                      </FooterLinksWrapper> 

                      <FooterLinksWrapper>
                            <FooterLinkTitle> Join the Pack! </FooterLinkTitle>
                                  <FooterText to='packer'>Packer</FooterText>
                                  <FooterText to='driver'>Driver</FooterText>
                                  <FooterText to='handman'>Hand-man</FooterText>
                                  <FooterText to='packman'>Pack-man</FooterText>  
                                  <FooterText to='carrier'>Carrier</FooterText> 
                      </FooterLinksWrapper> 
                  </FooterMidContainer>
                  <FooterRightContainer>
                  <FooterIcon to='/' style={{ backgroundImage:`url(${logo})` }}/>
                  </FooterRightContainer>
                </FooterRow>
            </FooterWrapper>

            <FooterBottomLine/>
         </FooterMainContainer>

            <FooterBottomSection>
                <FooterBottomLeftContainer>
                    <WebsiteRights>Relocate © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <WebsiteTermsPolicy>Terms</WebsiteTermsPolicy>
                    <WebsiteTermsPolicy>FAQ</WebsiteTermsPolicy>
                </FooterBottomLeftContainer>
                
                <SocialMediaWrap>
                    <SocialLogoWrap>
                      <SocialLogo src={fb} />
                    </SocialLogoWrap>
                    <SocialLogoWrap>
                      <SocialLogo src={ig}/>
                    <SocialLogoWrap>
                    </SocialLogoWrap>
                      <SocialLogo src={ldin}/>
                    <SocialLogoWrap>
                    </SocialLogoWrap>
                      <SocialLogo src={tw} />
                    <SocialLogoWrap>
                    </SocialLogoWrap>
                      <SocialLogo src={yt} />
                    </SocialLogoWrap>
                </SocialMediaWrap>

            </FooterBottomSection>
        </FooterContainer>
    )
}

export default Footer;


/*

Social Links / Website Rights

<WebsiteRights>
<SocialMediaWrap>
  <SocialLogo onClick={handleClick1} style={{ backgroundImage:`url(${fb})` }} />
</SocialMediaWrap>

©2022 K & M Restoration & Renovation, LLC. All rights reserved.</WebsiteRights>

*/