import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
      I’m always open to new opportunities, collaborations, and discussions. Whether you have an interesting project in mind, a question about my work, or simply want to say hi, don’t hesitate to drop me a line. I look forward to connecting with you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:rakshitbhardwaj155@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
