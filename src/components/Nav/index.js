import React from "react";
import Search from "../Search/index";
import Logo from "../../images/Logo.png";
import { Image, NavContent, Paragraph, ButtonTheme, Toggle } from "./NavElements";
import { Section } from "../../styles/styles";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Nav(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <Section>
      <NavContent>
        <Image src={Logo} alt="Logo" />
        <Search />
        <Paragraph>Compre sem sair do conforto da sua casa</Paragraph>
        <ButtonTheme>
          <Toggle onClick={changeTheme}>{icon}</Toggle>
        </ButtonTheme>
      </NavContent>
    </Section>
  );
}

export default Nav;
