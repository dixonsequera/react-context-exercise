import { useCharacters } from '../context/CharactersContext';
import { Link } from 'react-router-dom';

const Home = () => {
const { characters, loading, error } = useCharacters();

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

return (
    <div className="home-page">
    <h1>Game of Thrones Characters</h1>
    <div className="character-grid">
        {characters.map(character => (
        <Link to={`/details/${character.id}`} key={character.id} className="character-name-card">
            <h2>{character.fullName}</h2>
        </Link>
        ))}
    </div>
    </div>
);
};

export default Home;

