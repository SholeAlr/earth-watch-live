import "./styles/ErrorScreen.scss";
import type { ErrorScreenProps } from "./types";

export const ErrorScreen = ({
  message = "Something went wrong!",
  onRetry,
}: ErrorScreenProps) => {
  return (
    <div className='error-overlay'>
      <div className='error-box'>
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    </div>
  );
};
