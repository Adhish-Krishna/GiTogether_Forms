import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./home.css";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  const [showAbout , setShowAbout] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [joinbtnclicked , setJoinBtnclicked] = useState(false);

  const handleMoreClick = ()=>{
    setShowAbout(true);
    setButtonClicked(true);
  };

  const handlejoinclick = ()=>{
    setJoinBtnclicked(true);
  }

  const tRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(tRef.current, {
      duration: 0.5,
      scale: 1.5,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
      repeat: 1,
    });
  }, []);

  const particles = Array.from({ length: 50 });

  return (
    <>
    <Header/>
    <div className="home-container">
    {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        ></span>
      ))}
    <h1 className="githubtxt">GITHUB CAMPUS CLUB PRESENTS</h1>
    <div className="txt">
      <h1 style={{ display: "inline-block",color:"#d91656" }}>
        GI
        <span ref={tRef} className="ttxt">
          T
        </span>
        OGETHER
      </h1>
    </div>
    <h1 className="tagline">A Fun Non Technical Event</h1>
    <button className={`morebtn ${!buttonClicked ? "wobble" : ""}`}
          onClick={handleMoreClick} href="#about">More About Git Together</button>
    <section id="about">
    {showAbout && <About/>}
    </section>
    {showAbout && <a className={`joinbtn ${!joinbtnclicked?"wobble":""}`} href="/register" onClick={handlejoinclick}>Join the Fun</a>}
    <section id="contact">
    {showAbout && <Footer/>}
    </section>
    </div>
    </>
  );
};

export default HomePage;
