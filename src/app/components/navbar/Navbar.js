"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  const [textIndex, setTextIndex] = useState(0);

  const textOptions = ["Brand", "Identity", "Success", "Solution", "Future"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "Project", href: "/contact" },
    { name: "Testimonial", href: "/testimonial" },
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
                    src="/images/Logo.png"
                    alt="logo"
                    width={120}
                    height={45}
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
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button className="navCall-btn">Schedule a call</button>
              </div>
            </div>
          </nav>
        </div>

        <div className="mainsection">
          <div className="main-content">
            <div className="mainsec-left">
              <div className="mainsec-boxOne">
                <h1>
                  Make Your{" "}
                  <span className="top-brand">{textOptions[textIndex]}</span>{" "}
                  <br />
                  With{" "}
                  <div className="text-container">
                    Arnnima
                    <span className="dot"></span>
                  </div>{" "}
                  Solution
                  <GoDotFill className="doticon" />
                </h1>
                <p>
                  We craft premium digital work for web, mobile and experiential
                  with creative agencies <br /> and global brands alike putting
                  passion, pride and plenty of elbow grease into <br />{" "}
                  everything we do.<span>.</span>
                </p>
              </div>
              <div>
                <button className="getStartBtn">Get Started</button>
              </div>
            </div>
            <div className="mainsec-right">
              <Image
                src="/images/mainSectionImg.png"
                className="main-image"
                alt="Main Section"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
