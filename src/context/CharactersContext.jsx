import { createContext, useContext, useState, useEffect } from 'react';

const CharactersContext = createContext();

export function CharactersProvider({ children }) {
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchCharacters = async () => {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        setCharacters(data);
        setLoading(false);
    } catch (err) {
        setError('Failed to fetch characters');
        setLoading(false);
    }
    };

    fetchCharacters();
}, []);

return (
    <CharactersContext.Provider value={{ characters, loading, error }}>
    {children}
    </CharactersContext.Provider>
);
}

export function useCharacters() {
return useContext(CharactersContext);
}

