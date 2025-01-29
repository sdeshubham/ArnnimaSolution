// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import "./navbar.css";
// import Image from "next/image";
// import Logo from "../Images/Logo.png";
// import mainSectionImg from "../Images/mainSectionImg.png"
// import { IoMenu, IoCloseSharp } from "react-icons/io5";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/aboutus" },
//     { name: "Services", href: "/services" },
//     { name: "Project", href: "/contact" },
//     { name: "Testimonial", href: "/testimonial" },
//   ];

//   return (
//     <>
//       <div className="main-container">
//         <div className="nav-box">
//           <nav className="navbar">
//             <div className="container">
//               <div className="logo">
//                 <a href="/">
//                   <Image src={Logo} alt="logo" width={120} height={45} />
//                 </a>
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
//                       <Link href={item.href} onClick={() => setMenuOpen(false)}>
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="navCall-btn">Schedule a call</button>
//               </div>
//             </div>
//           </nav>
//         </div>
//         <div className="mainsection">
//           <div>
//             <div className="mainsec-left">
//               <h1>Make Your Brand With Arnnima Solution.</h1>
//               <p>
//                 We craft premium digital work for web, mobile and experiential
//                 with creative agencies and global brands alike – putting
//                 passion, pride and plenty of elbow grease into everything we do.
//               </p>
//               <button>Get Started</button>
//             </div>
//             <div className="mainsec-left">
//               <img src={mainSectionImg} alt="mainSectionImg" />
//             </div>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [textIndex, setTextIndex] = useState(0);

  const textOptions = ["Brand", "Identity", "Success", "Solution", "Future"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
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
                  Make Your <span className="top-brand">{textOptions[textIndex]}</span> <br />
                  With Arnnima Solution.
                </h1>
                <p>
                  We craft premium digital work for web, mobile, and
                  experiential with creative agencies <br /> and global brands alike —
                  putting passion, pride, and plenty of elbow grease into
                  everything we do <span>.</span>
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
}

export default Navbar;