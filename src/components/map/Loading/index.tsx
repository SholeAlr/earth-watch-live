import { orbitingEmojis } from "./constants";
import "./styles/Loading.scss";

export const Loading = ({ text = "Watching the Earth..." }) => {
  return (
    <div className='loading-overlay'>
      <div className='spinner-container'>
        <div className='earth'>🌍</div>
        {orbitingEmojis.map((emoji, index) => (
          <div
            key={index}
            className='orbit'
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <span className='emoji'>{emoji}</span>
          </div>
        ))}
      </div>
      <p>{text}</p>
    </div>
  );
};
