import React, { useRef } from "react";

export default function MenuIcon() {

  let refIcon = useRef();
  
  const changeIcon = () => {
    
    const nav = document.querySelector(".nav");
    if (refIcon.current.textContent === "menu") {
      refIcon.current.textContent = "close";
      if (nav.classList.contains("slideout")) {
        nav.classList.remove("slideout");
      }
      nav.classList.add("slidein");
    } else {
      refIcon.current.textContent = "menu";
      nav.classList.remove("slidein");
      nav.classList.add("slideout");
    }
  };

  return (
    <span
      id="menu-icon"
      className="material-icons"
      ref={refIcon}
      onClick={changeIcon}
    >
      menu
    </span>
  );
}
