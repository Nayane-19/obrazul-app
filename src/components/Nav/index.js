import React, { useEffect, useState } from "react";
import Search from "../Search/index";
import Logo from "../../images/Logo.png";
import { Image, NavContent, Paragraph, ButtonTheme, Toggle } from "./NavElements";
import { Section } from "../../styles/styles";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Api from "../../api";




function Nav(props) {
    const [info, setInfo] = useState({})
    const [text,setText]= useState('');
     
 
  useEffect(() => {
    if (text){
    fetch(`${Api}?filter[text]=${text}`)
    .then((response) => response.json())
    .then((response) => {
      setInfo(response)
      console.log(response);
    }) 
    }
  },[text])

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
        <Search value={text} onChange={(search) => setText(search)}/>
        {info.data && (
        <ul className='animes-list'>
            {info.data.map((item) => (
          <li key={item.ean}>
            <img src={item.products.picture} alt={item.products.name}/>
            {item.products.fullname}
          </li>
        ))}
      </ul> 
    )}
        <Paragraph>Compre sem sair do conforto da sua casa</Paragraph>
        <ButtonTheme>
          <Toggle onClick={changeTheme}>{icon}</Toggle>
        </ButtonTheme>
      </NavContent>
    </Section>
  );
}

export default Nav;
