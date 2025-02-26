import React, { useEffect, useRef, useState, Suspense } from "react";
import {  RotatingHeader, useAnimateSmallHeadline, useAnimateText } from "../ScrollAnimations";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import BalloonModel from "../BalloonModel";
import Accordion from "../Accordion";
import Lottie from "lottie-react";
import Cutting_Edge_Technology from "../assets/lottie_animations/cutting_edge_anime.json"
import Client_Centric from "../assets/lottie_animations/client_centric.json"
import Global_Reach from "../assets/lottie_animations/global_reach.json"

export const Section4 = () => {

  useAnimateText(".four-animate-text")

  useAnimateSmallHeadline(".why-us-title-1, .why-us-title-2, .why-us-title-3")

    return (
      <>
        <section className="four">
          {/* <div className="four-experience">
            <Canvas camera={{ position: [0, 0, 5], fov: 35 }} >
              <Suspense fallback >
                <Float speed={2} >
                  <BalloonModel />
                </Float>
              </Suspense>
              <Environment preset="apartment" />
              <OrbitControls enableZoom={ false } />
            </Canvas>
          </div> */}
          <div className="four-content">
            <h1 className="headline-purple-big four-animate-text" >Why Us</h1>
            <div className="why-us-container">

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title why-us-title-1" >Cutting Edge Technology</h1>
                  <div style={{marginTop : 100}}>
                  <Lottie animationData={Cutting_Edge_Technology} loop={true} />;
                  </div>
                  
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-fire why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >High performance</h1>
                      <p className="why-us-text-description" >Utilizes the power of the Graphics Processing Unit, rendering complex graphics and animations to handle large volumes of data at high frame rates. </p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-cube why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Interactivity</h1>
                      <p className="why-us-text-description" >Supports real-time interactions where users can navigate 3D environments, manipulate objects, and experience dynamic content.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-link why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Cross-Platform Compatibility</h1>
                      <p className="why-us-text-description" >Designed to work flawlessly on a range of devices in order to allow users to enjoy our websites whether they are on a high-end desktop or a mobile device.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title why-us-title-2" >Global Reach</h1>
                  <Lottie  animationData={Global_Reach} loop={true} />;
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                  <i class="fa-solid fa-globe why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >International Clientele</h1>
                      <p className="why-us-text-description" >Our services have a global appeal which allows us to attract clients worldwide and understand the nuances of different markets.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-language why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Multi-Lingual Team</h1>
                      <p className="why-us-text-description" >Our team’s diverse linguistic skills enable us to communicate with clients worldwide. We offer our services in multiple languages, ensuring clear and efficient communication.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-map why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Global Market Insights</h1>
                      <p className="why-us-text-description" >Our team’s international background gives us deep insights into different markets, tailoring our solutions to meet specific regional requirements.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title why-us-title-3" >Client-Centric Approach</h1>
             
                  <div style={{scale : "0.8"}}>
                  <Lottie animationData={Client_Centric} loop={true} />;
                  </div>
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-user why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Personalized Service</h1>
                      <p className="why-us-text-description" >We commence with thorough consultations to understand your vision and requirements, ensuring our services align seamlessly with your brand.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-key why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Collaborative Development</h1>
                      <p className="why-us-text-description" >We maintain continuous communication throughout development, ensuring the final product meets and exceeds your expectations.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-handshake why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Dedicated Partnership</h1>
                      <p className="why-us-text-description" >We see clients as long-term partners, committed to your success with ongoing support and strategic advice to enhance your client’s web experiences.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
}