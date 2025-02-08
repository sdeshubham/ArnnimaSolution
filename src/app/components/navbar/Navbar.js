"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#whoweare" },
    { name: "Services", href: "#services" },
    { name: "Project", href: "#projects" },
    { name: "Testimonial", href: "#testimonial" },
  ];

  return (
    <>
      <div className="main-container">
        <div className="nav-box">
          <nav className="navbar">
            <div className="container">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={"/ArnnimaLogo.svg"}
                    alt="logo"
                    width={165}
                    height={50.25}
                  />
                </Link>
              </div>
              <button
                className="menuButton"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <IoCloseSharp /> : <IoMenu />}
              </button>
              <div className="navlinksbox">
                <ul className={`navLinks ${menuOpen ? "showMenu" : ""}`}>
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <button className="navCall-btn">Schedule a call</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
