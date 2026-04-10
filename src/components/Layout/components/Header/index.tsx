import { useState } from "react";
import "./styles/Header.scss";
import { ENVIRONMENT_FACTS } from "./constants";

export const Header = () => {
  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [key, setKey] = useState(0);

  const shuffledFacts = shuffleArray(ENVIRONMENT_FACTS);
  const text = shuffledFacts.join("   •   ");

  return (
    <div className='header'>
      <h1>EARTH WATCH LIVE 📍</h1>

      <div className='ticker'>
        <p
          key={key}
          className='ticker-text'
          onAnimationEnd={() => setKey((prev) => prev + 1)}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
