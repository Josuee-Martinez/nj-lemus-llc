import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <section>
         <div className="home-hero">
            <h1>NJ Lemus LLC</h1>
            <h2>Complete drywall installation and repair</h2>
            <Link to="/services">
               <button className="call-action">Our Services</button>
            </Link>
         </div>
      </section>
   );
};

export default Home;
