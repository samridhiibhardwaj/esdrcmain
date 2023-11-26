import React from "react";
import { animateScroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Embedded System Design And Robotics Club
            </SocialLogo>

            <WebsiteRights>
              Robotics 21-25
            </WebsiteRights>
            <SocialIcons>
            <SocialIconLink href="mailto:stellarroboticsclub@gmail.com" target="_blank" aria-label="Instagram">
                <FaMailBulk />
              </SocialIconLink>
              <SocialIconLink href="https://instagram.com/esdrc_amity?igshid=MzMyNGUyNmU2YQ==" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink href="https://www.linkedin.com/in/esdrc-amity-05984a2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
            
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
