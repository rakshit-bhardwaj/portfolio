import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi! My name is Rakshit, and I am passionate about creating
            web apps and illustrations. My interest in coding orignated from gaming believe it or not. Fixing dll errors, setting up LAN servers to play with friends, trying out different OSs increased my curiosity about the inner working of computers which sparked my interest in computer science.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in developing
            Web apps using NextJS and firebase as my primary stack.
            I am also familliar with cross-platform mobile developement using react native.
          </p>

          <p className="about-grid-info-text">
            Additionally, I create illustrations using adobe illustrator to keep in touch with my creative side.
            You can find them here{" "}
            <Link
              className="link"
              target="_blank"
              href="https://www.instagram.com/rakshit_ke_chitr/"
            >
              Rakshit ke Chitr,
            </Link>
          </p>
          <p className="about-grid-info-text">
            My tech Stack:
          </p>
          <ul className="about-grid-info-list">
           <li className="about-grid-info-list-item">NextJS</li>
            <li className="about-grid-info-list-item">ReactJS</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Git</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">C/C++</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profilesquare.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
