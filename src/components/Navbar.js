import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <header>
         <Link to="/" className="logo">
            NJ Lemus
         </Link>

         <nav>
            <ul>
               <li>
                  <Link to="/">HOME</Link>
               </li>
               <li>
                  <Link to="/services">SERVICES</Link>
               </li>
               <li>
                  <Link to="/about">ABOUT</Link>
               </li>

               <li>
                  <Link to="/contact">CONTACT</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
