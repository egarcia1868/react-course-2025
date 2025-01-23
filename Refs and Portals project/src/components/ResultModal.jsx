import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ onReset, remainingTime, targetTime }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    const userLost = remainingTime <=0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime/ (targetTime * 1000)) * 100);

    return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You lost!</h2> : <h2>Your score: {score}!</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button onSubmit={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
