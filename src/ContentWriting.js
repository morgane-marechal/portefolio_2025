import { motion } from "framer-motion";



const ContentWriting =({ text })=> {
  const letters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.008,
        delayChildren: 0.05,
        },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 2,
      y: 0,
      transition: { type: "tween", stiffness: 180 },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        fontSize: "1.2rem",
        gap: "1px",
      }}
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default ContentWriting;
