import { useState } from "react";
import { motion } from "motion/react";

export default function SwipeDecisionCard() {
  const [status, setStatus] = useState("Drag the card");
  const [distance, setDistance] = useState(0);

  function handleDragEnd(_event, info) {
    setDistance(Math.round(info.offset.x));
    if (info.offset.x > 60) {
      setStatus("Saved");
    } else if (info.offset.x < -60) {
      setStatus("Dismissed");
    } else {
      setStatus("Try dragging farther");
    }
  }

  return (
    <section className="practice-stack">
      <p>{status}</p>
      <p>Distance: {distance}px</p>
      <motion.div
        className="drag-card"
        drag="x"
        dragConstraints={{ left: -160, right: 160 }}
        dragMomentum={false}
        whileDrag={{ scale: 1.05 }}
        onDragEnd={handleDragEnd}
      >
        Swipe me
      </motion.div>

      <div>
        <button className="button" onClick={() => setStatus("Accepted")}>
          Accept
        </button>

        <button className="button" onClick={() => setStatus("Rejected")}>
          Reject
        </button>
      </div>
    </section>
  );
}
