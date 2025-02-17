import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Counter = () => {
const [count, setCount] = useState(0);
const { darkMode } = useTheme();

return (
    <div className={`counter ${darkMode ? 'dark' : 'light'}`}>
    <h2>Counter Component</h2>
    <p>Current count: {count}</p>
    <div className="counter-buttons">
        <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
    </div>
);
};

export default Counter;

