import { motion } from "motion/react";

export default function DraggableCard() {
  return (
    <motion.div
      className="drag-card"
      drag
      dragConstraints={{ left: -120, right: 120, top: -40, bottom: 40 }}
      dragElastic={0.05}
      whileDrag={{ scale: 1.12, rotate: 6 }}
    >
      Drag me 6.
    </motion.div>
  );
}
