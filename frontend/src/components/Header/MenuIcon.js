import { useState } from "react";

export default function MenuIcon(props) {
  const [icon, setIcon] = useState(props.icon);
  
  const changeIcon = () => {
    const nav = document.querySelector(".nav");
    if (icon === "menu") {
      setIcon("close");
      if (nav.classList.contains("slideout")) {
        nav.classList.remove("slideout");
      }
      nav.classList.add("slidein");
    } else {
      setIcon("menu");

      nav.classList.remove("slidein");
      nav.classList.add("slideout");
    }
  };

  return (
    <span id="menu-icon" className="material-icons" onClick={changeIcon}>
      {icon}
    </span>
  );
}
