import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PokeCards({ pokemon }) {
  // Helper Functions
  // Change a word to title case
  const toTitleCase = (str) => {
    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  };

  // Create a string of pokemon types based on their returned list of types
  const typeString = (types) => {
    if (types.length === 1) {
      return `Type: ${toTitleCase(types[0].type.name)}`;
    } else {
      let count = 0;
      let output = "Types: ";
      while (count < types.length - 1) {
        output += `${toTitleCase(types[count].type.name)}, `;
        count++;
      }
      output += `${toTitleCase(types[count].type.name)}`;
      return output;
    }
  };

  // Create a string of the pokemon's types
  const statString = (stats) => {
    let output = "IVs: ";
    stats.map(
      (stat) =>
        (output += `\n${toTitleCase(stat.stat.name)}: ${stat.base_stat}`)
    );
    return output;
  };

  // Create a string of the pokemons moves
  const moveString = (moves) => {
    let output = "Moves: ";
    moves.map((move) => (output += `\n${toTitleCase(move.move.name)}`));
    return output;
  };

  return (
    <Container>
      <Row id="cardHolder" xs={2} md={3} lg={4}>
        {pokemon.map((mon, i) => (
          <Col key={i}>
            <Card
              className="bg-stone-600 text-gray-200"
              style={{ width: "12rem" }}
            >
              <Card.Img
                variant="top"
                src={mon.img}
                alt={`A picture of ${mon.name}`}
              />
              <Card.Body>
                <Card.Title>{`${toTitleCase(mon.name)}`}</Card.Title>
                <Card.Text>
                  {typeString(mon.types)}
                  <br />
                  <br />
                  {statString(mon.stats)
                    .split("\n")
                    .map((str, i) => (
                      <p key={i}>{str}</p>
                    ))}
                  <br />
                  <br />
                  {moveString(mon.moves)
                    .split("\n")
                    .map((str, i) => (
                      <p key={i}>{str}</p>
                    ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

PokeCards.propTypes = {
  pokemon: PropTypes.array,
};

export default PokeCards;
