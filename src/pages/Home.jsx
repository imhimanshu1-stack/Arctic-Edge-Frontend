import React from 'react';
import heroImage from '../assets/home.jpg';
import "./home.css";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <section className="container">
        <img
          src={heroImage}
          alt="California Comfort"
          className="home-image"

        />

        <div className="home-content">
          <h2>California Comfort Heating and Air Conditioning</h2>
          <h1>The Right Team For Your <br/>Home & Business</h1>
          <p>
            Our team of dedicated Heating and Cooling Specialists have decades of experience in Residential and Commercial.
          </p>
          <button className="home-button">Get Free Estimate</button>
        </div>
      </section>

      <Hero />
    </div>
  );
};

export default Home;
