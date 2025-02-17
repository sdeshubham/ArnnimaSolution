// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import "./navbar.css";
// import { IoMenu, IoCloseSharp } from "react-icons/io5";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "#whoweare" },
//     { name: "Services", href: "#services" },
//     { name: "Project", href: "#projects" },
//     { name: "Testimonial", href: "#testimonial" },
//   ];

//   return (
//     <>
//       <div className="main-container">
//         <div className="nav-box">
//           <nav className="navbar">
//             <div className="container">
//               <div className="logo">
//                 <Link href="/">
//                   <Image
//                     src={"/ArnnimaLogo.svg"}
//                     className="navbar-logo"
//                     alt="logo"
//                     width={165}
//                     height={50.25}
//                   />
//                 </Link>
//               </div>
//               <button
//                 className="menuButton"
//                 onClick={() => setMenuOpen(!menuOpen)}
//               >
//                 {menuOpen ? <IoCloseSharp /> : <IoMenu />}
//               </button>
//               <div className="navlinksbox">
//                 <ul className={`navLinks ${menuOpen ? "showMenu" : ""}`}>
//                   {navItems.map((item) => (
//                     <li key={item.name}>
//                       <a href={item.href} onClick={() => setMenuOpen(false)}>
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="navCall-btn">Schedule a call</button>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import "./navbar.css";
// import { IoMenu, IoCloseSharp } from "react-icons/io5";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth >= 480 && window.innerWidth <= 767);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "#whoweare" },
//     { name: "Services", href: "#services" },
//     { name: "Project", href: "#projects" },
//     { name: "Testimonial", href: "#testimonial" },
//   ];

//   return (
//     <div className="main-container">
//       <div className="nav-box">
//         <nav className="navbar">
//           <div className="container">
//             <div className="logo">
//               <Link href="/">
//                 <Image
//                   src={"/ArnnimaLogo.svg"}
//                   className="navbar-logo"
//                   alt="logo"
//                   width={165}
//                   height={50.25}
//                 />
//               </Link>
//             </div>

//             {isMobile && (
//               <button
//                 className="menuButton"
//                 onClick={() => setMenuOpen(!menuOpen)}
//               >
//                 {menuOpen ? <IoCloseSharp /> : <IoMenu />}
//               </button>
//             )}

//             <div className={`navlinksbox ${isMobile ? "mobile-menu" : ""} ${menuOpen ? "showMenu" : ""}`}>
//               <ul className="navLinks">
//                 {navItems.map((item) => (
//                   <li key={item.name}>
//                     <a href={item.href} onClick={() => setMenuOpen(false)}>
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <button className="navCall-btn">Schedule a call</button>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";

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
    <div className="main-container">
      <div className="nav-box">
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/ArnnimaLogo.svg"
                  className="navbar-logo"
                  alt="logo"
                  width={165}
                  height={50.25}
                />
              </Link>
            </div>

            <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IoCloseSharp className="navmenu-icons" /> : <IoMenuSharp className="navmenu-icons" />}
            </button>

            <div className={`navlinksbox ${menuOpen ? "showMenu" : ""}`}>
              <ul className="navLinks">
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
  );
};

export default Navbar;
