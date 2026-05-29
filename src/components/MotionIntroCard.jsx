import { motion } from "motion/react";

export default function MotionIntroCard() {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <p className="eyebrow">Motion practice 2.</p>
      <h1>Motion card</h1>
      <p>This card fades in and moves slightly into place.</p>
      <button className="button">Like</button>
    </motion.article>
  );
}
