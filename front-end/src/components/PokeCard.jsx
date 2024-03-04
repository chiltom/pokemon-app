function PokeCard({ name, types, img, key }) {
    
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
        <li key={key}>
            <h3>{toTitleCase(name)}</h3>
            <p>{typeString(types)}</p>
            <img src={img}/>
        </li>
    )
}

export default PokeCard;