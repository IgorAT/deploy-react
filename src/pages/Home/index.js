import { useDispatch, useSelector } from 'react-redux';
import { Link } from '../../components/Link';
import { decrement, increment } from '../../store/counter/actions';

import { Counter } from './styles';

function Home() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const isEven = () => {
    return count % 2 === 0;
  }

  return (
    <div>
      <Counter isEven={isEven()}>{count}</Counter>

      <button onClick={() => { dispatch(increment()) }}>
        +1
      </button>
      <button onClick={() => { dispatch(decrement()) }}>
        -1
      </button> 
      <Link path="/about">
        go to about
      </Link>
    </div>
  );
}

export default Home;
