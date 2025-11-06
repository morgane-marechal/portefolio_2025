import { motion } from "framer-motion";



const TitleWriting =({ text, color='#f5f5f5' })=> {
  const letters = text.split("");
  const colorT = color;
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      color:colorT,
      fontFamily: "'Space Grotesk', sans-serif",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        },
    },
  };

  const child = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      y: 1,
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        fontSize: "1.5rem",
        fontWeight: 300,
      }}
    >
      {letters.map((char, letter) => (
        <motion.span key={letter} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default TitleWriting;
