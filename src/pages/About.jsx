import { useTheme } from '../context/ThemeContext';

const About = () => {
const { darkMode } = useTheme();

return (
    <div className={`about-page ${darkMode ? 'dark' : 'light'}`}>
    <h1>About</h1>
    <p>This is a React demo application showcasing:</p>
    <ul>
        <li>Theme Context for dark/light mode</li>
        <li>React Router for navigation</li>
        <li>useState for state management</li>
        <li>useEffect for data fetching</li>
    </ul>
    </div>
);
};

export default About;

