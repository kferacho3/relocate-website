import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import "./Footer.scss";
import {
  FacebookButton,
  FooterBottomLine,
  FooterBottomSection,
  FooterContainer,
  FooterIcon,
  FooterInfo,
  FooterLeftAddress,
  FooterLeftButton,
  FooterLeftContainer,
  FooterLeftEmail,
  FooterLeftHead,
  FooterLeftNumber,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterMainContainer,
  FooterMidContainer,
  FooterRightContainer,
  FooterRow,
  FooterText,
  FooterTopLine,
  FooterWrapper,
  InstagramButton,
  LinkedinButton,
  RoundedSocialButtons,
  SocialMediaWrap,
  TwitterButton,
  WebsiteRights,
  WebsiteTermsPolicy,
  YoutubeButton
} from './FooterElements';

  import * as AiIcons from 'react-icons/ai';

  


  
import logo from './FooterImg/footerLogo.svg';



const Footer = () => {

   
 
    /*
    const handleClick1 = () => {
        window.open("https://www.facebook.com/kmrenovations2020");
      };*/


      //handles timed popup by eliminating rapid popup (useEffect helps)
      


    return (
        <FooterContainer  >
         <FooterTopLine/>
         <FooterMainContainer>
        
              
            <FooterWrapper>
                <FooterRow>
                  <FooterLeftContainer>
                    <FooterLeftHead> CORPORATE HEADQUARTERS</FooterLeftHead>
                    <FooterLeftAddress> <AiIcons.AiFillHome />Atlanta , Georgia</FooterLeftAddress>
                    <FooterLeftEmail> <AiIcons.AiTwotoneMail />kristian@getrelocate.com</FooterLeftEmail>
                    <FooterLeftNumber><AiIcons.AiFillPhone />+1-(312)-933-4773</FooterLeftNumber>
                    <FooterLeftButton> <AiIcons.AiFillBook />BOOK A MOVE</FooterLeftButton>
                  </FooterLeftContainer>

                  <FooterMidContainer>
                      
                    
                      <FooterLinksWrapper>
                            <FooterLinkTitle> About </FooterLinkTitle>
                                  <FooterText to='/'>Home</FooterText>
                                  <FooterText to='locations'>Locations</FooterText>
                                  <FooterText to='pack'>Jobs</FooterText>
                                  <FooterText to='relocationMetrics'>Relocation Metrics</FooterText>  
                                  <FooterText to='faq'>FAQ</FooterText> 
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
                            <FooterLinkTitle> Careers </FooterLinkTitle>
                                  <FooterText to='/applyPage/applyPacker'>Packer</FooterText>
                                  <FooterText to='/applyPage/applyDriver'>Driver</FooterText>
                                  <FooterText to='/applyPage/applyHandman'>Hand-man</FooterText>
                                  <FooterText to='/applyPage/applyPackman'>Pack-man</FooterText>  
                                  <FooterText to='/applyPage/applyCarrier'>Carrier</FooterText> 
                      </FooterLinksWrapper> 

                      <FooterLinksWrapper>
                            <FooterLinkTitle> Contact </FooterLinkTitle>
                                  <FooterText to='connect'>Contact Us</FooterText>
                                  <FooterText to='help'>Customer Support</FooterText>
                                  <FooterText to='movePrep'>Move Preparation</FooterText>
                      </FooterLinksWrapper> 
                  </FooterMidContainer>
                  <FooterRightContainer>
                    <FooterIcon to='/' style={{ backgroundImage:`url(${logo})` }}/>
                  </FooterRightContainer>
                </FooterRow>
            </FooterWrapper>

           
         </FooterMainContainer>
         <FooterBottomLine/>
            <FooterBottomSection>
        

           <FooterInfo>
        <WebsiteRights>Relocate © {new Date().getFullYear()} All rights reserved</WebsiteRights>
        <WebsiteTermsPolicy><a href="#">Terms</a></WebsiteTermsPolicy>
        <WebsiteTermsPolicy style={{marginLeft: `-30px`}}><a href="#">Privacy</a></WebsiteTermsPolicy>
      </FooterInfo>
                
                <SocialMediaWrap>
                <RoundedSocialButtons>

                  <FacebookButton href="https://www.facebook.com/" target="_blank">
                    <FaFacebookF />
                  </FacebookButton>

                  <TwitterButton href="https://www.twitter.com/" target="_blank">
                    <FaTwitter />
                  </TwitterButton>

                  <LinkedinButton href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin />
                  </LinkedinButton>

                  <YoutubeButton href="https://www.youtube.com/" target="_blank">
                    <FaYoutube />
                  </YoutubeButton>

                  <InstagramButton href="https://www.instagram.com/" target="_blank">
                    <FaInstagram />
                  </InstagramButton>

                </RoundedSocialButtons>
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