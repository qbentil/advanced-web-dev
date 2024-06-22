import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Button from "../core/button";
import React from "react";

export const NavItem = ({ text, link, active }) => {
  return (
    <li
      className={`hover:text-primary ${active ? "text-primary" : "text-body"}`}
    >
      <a href={link}>{text}</a>
    </li>
  );
};

const Navbar = ({ page, navigations, type = "top" }) => {
  return (
    <div className="w-screen flex items-center justify-between px-10 py-2">
      {/* logo */}
      <div>
        <img src="/assets/Logo.png" className="w-36" alt="logo" />
      </div>
      {/* navigations */}
      <div>
        <ul className="flex items-center justify-center gap-x-4">
          {navigations.map((nav) => (
            <NavItem
              key={nav.link}
              text={nav.text}
              link={nav.link}
              active={page === nav.link}
            />
          ))}
        </ul>
      </div>
      {/* contact me */}
      <div className="flex items-center justify-center gap-x-2">
        {type === "footer" ? (
          <div className="flex items-center justify-center gap-x-2 text-xl">
            <FaFacebookF className="hover:text-primary cursor-pointer" />
            <FaInstagram className="hover:text-primary cursor-pointer" />
            <FaTwitter className="hover:text-primary cursor-pointer" />
            <FaLinkedin className="hover:text-primary cursor-pointer" />
          </div>
        ) : (
          <Button text="Contact Me" variant="primary" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
