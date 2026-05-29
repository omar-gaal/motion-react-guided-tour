import { useState } from "react";
import { motion } from "motion/react";

export default function RevealDetailsCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="card">
      <p className="eyebrow">Motion practice 3.</p>
      <h1>React state</h1>

      <motion.button
        className="button"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.96 }}
      >
        {isOpen ? "Hide details" : "Show details"}
      </motion.button>

      <motion.section
        className="details"
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
          x: isOpen ? 0 : -16,
          scale: isOpen ? 1 : 0.85,
        }}
        transition={{ duration: 0.6 }}
      >
        <h2>More information</h2>
        <p>This content is only visible when the card is open.</p>
      </motion.section>
    </article>
  );
}
