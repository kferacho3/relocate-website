import React from 'react';
import "./Footer.scss";
import {
  FooterBottomLeftContainer,
  FooterBottomLine,
  FooterBottomSection,
  FooterContainer,
  FooterIcon,
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
  SocialLogo,
  SocialLogoWrap,
  SocialMediaWrap,
  WebsiteRights,
  WebsiteTermsPolicy
} from './FooterElements';

  import * as AiIcons from 'react-icons/ai';

  


  
import fb from './FooterImg/Facebook.svg';
import ig from './FooterImg/Instagram.svg';
import ldin from './FooterImg/LinkdIn.svg';
import tw from './FooterImg/Twitter.svg';
import yt from './FooterImg/Youtube.svg';
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
                                  <FooterText to='metrics'>Relocation Metrics</FooterText>  
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
                                  <FooterText to='/applyInfoNav/applyPacker'>Packer</FooterText>
                                  <FooterText to='/applyInfoNav/applyDriver'>Driver</FooterText>
                                  <FooterText to='/applyInfoNav/applyHandman'>Hand-man</FooterText>
                                  <FooterText to='/applyInfoNav/applyPackman'>Pack-man</FooterText>  
                                  <FooterText to='/applyInfoNav/applyCarrier'>Carrier</FooterText> 
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