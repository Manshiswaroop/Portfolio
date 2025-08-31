import { motion } from "framer-motion";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section className="hero">
      <Avatar src="/avatar.png" size={240} alt="Manshi Swaroop" />

      <motion.div
        className="hero-text"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h2>Data Analyst · Data Scientist</h2>
        <p>
          Email:{" "}
          <a href="mailto:swaroopm1520@gmail.com">swaroopm1520@gmail.com</a> |
          Phone: +91&nbsp;9430959001
        </p>
        <p>
          <a href="https://github.com/Manshiswaroop" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com/in/manshiswaroop" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <a className="download-btn" href="/resume.pdf" download>
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
