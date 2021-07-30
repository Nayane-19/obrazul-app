import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscArrowUp } from "react-icons/vsc";
import {Section} from '../../styles/styles';
import {Paragraph} from '../Nav/NavElements'
import { FooterContainer, FooterTop, FooterContent, SocialIcons, SocialIconLink } from "./footerElements";

const Footer = () => {
  useEffect(() => {
    var btn = document.querySelector("#back-to-top");
    btn.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
  });


  return (
    <Section>
      <FooterContainer>
          <FooterTop>
            <VscArrowUp id="back-to-top" />
          </FooterTop>
          <FooterContent>
          <Paragraph>Para saber mais sobre o projeto.</Paragraph>
          <Paragraph>Entre em contato pelo número (31) 99550-3487</Paragraph>
          </FooterContent>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/nayane-menezes-dev-eng/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            
              <SocialIconLink
                href="https://github.com/Nayane-19"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
