import PropTypes from 'prop-types';

function PokeCards({ pokemon }) {

    // Helper Functions
    // Change a word to title case
    const toTitleCase = (str) => {
        const arr = str.split("");
        arr[0] = arr[0].toUpperCase();
        return arr.join("");
    }
    
    // Create a string of pokemon types based on their returned list of types
    const typeString = (types) => {
        let output = "Types: ";
        for (let type of types) {
            output += `${toTitleCase(type.type.name)} `;
        }
        return output
    }

    return (
        <div id="outputCont">
            {pokemon.map((mon, i) => (
                <li key={i}>
                    <h3>{toTitleCase(mon.name)}</h3>
                    <p>{typeString(mon.types)}</p>
                    <img src={mon.img} alt={`A picture of ${mon.name}`} />
                </li>
            ))}
        </div>
    )
}

PokeCards.propTypes = {
    pokemon: PropTypes.array
}

export default PokeCards;