import {useState} from 'react';
export default function MyReactComponent() {
    const [counter, setCounter] = useState(0);
    return <div>
        <button onClick={() => setCounter(prev => ++prev)}>+</button>
        <h2>
            {counter}
        </h2>
        <button onClick={() => setCounter(prev => --prev)}>-</button>
    </div>
}