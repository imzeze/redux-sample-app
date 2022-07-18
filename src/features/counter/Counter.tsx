import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button
        aria-label="Increment By Amount value"
        onClick={() => dispatch(incrementByAmount(3))}
      >
        Increment Amount
      </button>
    </div>
  );
};

export default Counter;
