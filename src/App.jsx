import StaticPracticeCard from "./components/StaticPracticeCard";
import MotionIntroCard from "./components/MotionIntroCard";
import RevealDetailsCard from "./components/RevealDetailsCard";
import SpringTransitionCard from "./components/SpringTransitionCard";
import PressableButton from "./components/PressableButton";
import DraggableCard from "./components/DraggableCard";
import "./App.css";

export default function App() {
  return (
    <main className="gallery">
      <section className="comparison">
        <StaticPracticeCard />
        <MotionIntroCard />
        <RevealDetailsCard />
        <SpringTransitionCard />
        <PressableButton />
        <DraggableCard />
      </section>
    </main>
  );
}
