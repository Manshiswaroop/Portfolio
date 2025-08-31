import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Summary
      </motion.h2>
      <p>
        Final-year Computer Science student skilled in Python, SQL, Tableau, Power BI, and Machine Learning, with experience in data analysis and visualization. Passionate about leveraging data-driven insights to solve problems and support business decisions.
      </p>
    </section>
  );
}

export default About;
