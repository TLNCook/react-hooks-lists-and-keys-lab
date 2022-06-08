import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return links.map((link) => {
    return (
        <a href={`#${link}`} key={link}>{link}</a>
    );
  })
}

export default NavBar;
