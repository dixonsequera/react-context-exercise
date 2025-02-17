import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CharactersProvider } from './context/CharactersContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import CharacterDetails from './pages/CharacterDetails';
import './App.css';

function App() {
return (
    <ThemeProvider>
    <CharactersProvider>
        <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:characterId" element={<CharacterDetails />} />
        </Routes>
        </Router>
    </CharactersProvider>
    </ThemeProvider>
);
}

export default App;
