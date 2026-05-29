import { motion } from "motion/react";

export default function PressableButton() {
  return (
    <motion.article
      className="card"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <p className="eyebrow">Motion practice 5.</p>
      <h1>Button feedback</h1>
      <p>Hover the button, then press it.</p>

      <motion.button
        className="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
      >
        Press me
      </motion.button>
    </motion.article>
  );
}
