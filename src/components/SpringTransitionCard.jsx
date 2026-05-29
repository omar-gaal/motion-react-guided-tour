import { motion } from "motion/react";

export default function SpringTransitionCard() {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, x: -48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        x: { type: "spring", stiffness: 240, damping: 18 },
        opacity: { duration: 0.2 },
      }}
    >
      <p className="eyebrow">Motion practice 4.</p>
      <h1>Spring transition</h1>
      <p>The movement uses a spring. The opacity uses a short duration.</p>
    </motion.article>
  );
}
