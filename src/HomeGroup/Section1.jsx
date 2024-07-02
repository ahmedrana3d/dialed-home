import React, { useEffect, useRef, useState } from "react";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useTextEffect } from "../ScrollAnimations";
import gsap from "gsap";
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee";

export const Section1 = () => {

  useTextEffect(".anim");

const [fullPageVisible, setFullPageVisible] = useState(false);
const handleFullPageToggle = () => {
  setFullPageVisible(!fullPageVisible);
};

useEffect(() => {
  // Fade in animation for the button when component mounts
  gsap.fromTo(
    ".one-button, .one-button-transparent, .one-description",
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
  );
}, []);

const isMobile = window.innerWidth <= 768;

const navigate = useNavigate();

const handleContactNavigate = () => {
  if (location.pathname === "/contact") {
    navigate("/");
  } else {
    navigate("/contact");
  }
};

    return (
      <>
        <section className="one">
          <div className="one-content" >
            <div className="one-content-left">
              <h1 className="headline anim grey" >Crafting Digital <br /> <span className="headline-purple grey" >Masterpieces</span></h1>
              <p className="one-description" >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
              <div className="one-content-buttons" >
                <motion.button
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleFullPageToggle}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >WATCH OUR REEL</span>
                    <span className="navigation-text" >WATCH OUR REEL</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
                <motion.button
                  className="one-button-transparent"
                  whileHover={{ scale: 1.075 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="navigation-left-content" onClick={ handleContactNavigate } >
                    <span className="navigation-text" >GET IN TOUCH</span>
                    <span className="navigation-text" >GET IN TOUCH</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
          <div className="one-content-logos">
            <Marquee speed={50} >
              <div className="marquee-row">
                <img className="marquee-image" src="/webflow.png" alt="" />
                <img className="marquee-image" src="/spline.png" alt="" />
                <img className="marquee-image" src="/threejs.png" alt="" />
                <img className="marquee-image" src="/shopify.png" alt="" />
                <img className="marquee-image" src="/react.png" alt="" />
                <img className="marquee-image" src="/hostinger.png" alt="" />
                <img className="marquee-image" src="/figma.png" alt="" />
                <img className="marquee-image" src="/gsap.png" alt="" />
              </div>
            </Marquee>
          </div>
        </section>

        <AnimatePresence>
        {fullPageVisible && (
          <motion.div
            className="showreel-overlay"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <video className="showreel-video" src="/video.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto"loop ></video>

            <motion.button
              className="navigation-left showreel-button"
              whileHover={{ scale: 1.075 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleFullPageToggle}
            >
              <div className="navigation-left-content" >

                {isMobile ? (
                  <i class="fa-solid fa-x"></i>
                ) : (
                <>
                  <span className="navigation-text" >CLOSE</span>
                  <span className="navigation-text" >CLOSE</span>
                </>
                )}
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      </>
    )
}

