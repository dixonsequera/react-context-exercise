import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCharacters } from '../context/CharactersContext';

const CharacterDetails = () => {
const { characterId } = useParams();
const { darkMode } = useTheme();
const { characters, loading, error } = useCharacters();
const navigate = useNavigate();

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

const character = characters.find(c => c.id === parseInt(characterId));

if (!character) return <div>Character not found</div>;

return (
<div className={`character-details ${darkMode ? 'dark' : 'light'}`}>
    <button 
        onClick={() => navigate(-1)}
        className="back-btn"
    >
        ← Back
    </button>
    <img 
        src={character.imageUrl} 
        alt={character.fullName}
        className="character-detail-image" 
    />
    <div className="character-info">
        <h1>{character.fullName}</h1>
        <p><strong>First Name:</strong> {character.firstName}</p>
        <p><strong>Last Name:</strong> {character.lastName}</p>
        <p><strong>Title:</strong> {character.title}</p>
        <p><strong>Family:</strong> {character.family}</p>
    </div>
    </div>
);
};

export default CharacterDetails;

