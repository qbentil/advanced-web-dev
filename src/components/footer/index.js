import { FooterSubNavs, Footernavigations } from "../../utils";
import Navbar, { NavItem } from "../navbar";

import React from "react";

const Footer = () => {
  return (
    <div className="bg-shade min-h-[10vh] flex flex-col gap-y-5 py-5">
      <Navbar navigations={Footernavigations} type="footer" />
      <div className="px-10 h-[0.08rem] w-full bg-gray-300" />
      <div className=" px-10 w-full flex items-center justify-between">
        <p>Made with 💖 by Bentil</p>
        <ul className="flex items-start justify-center gap-x-5">
          {FooterSubNavs.map((nav) => (
            <NavItem key={nav.link} text={nav.text} link={nav.link} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
