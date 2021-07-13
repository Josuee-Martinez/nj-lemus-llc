import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <section>
         <header>
            <Link to="/" className="logo">
               NJ Lemus
            </Link>

            <nav>
               <ul>
                  <li>
                     <Link to="#home">HOME</Link>
                  </li>
                  <li>
                     <Link to="#services">SERVICES</Link>
                  </li>
                  <li>
                     <Link to="#about">ABOUT</Link>
                  </li>

                  <li>
                     <Link to="#contact">CONTACT</Link>
                  </li>
               </ul>
            </nav>
         </header>
         <div className="home-hero">
            <h1>NJ Lemus LLC</h1>
            <h2>Complete drywall installation and repair</h2>
            <button className="call-action">Our Services</button>
         </div>
      </section>
   );
};

export default Home;
