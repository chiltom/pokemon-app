import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container>
            <Row xs={2} md={3} lg={4}>
                {pokemon.map((mon, i) => (
                    <Col key={i}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={mon.img} alt={`A picture of ${mon.name}`} />
                            <Card.Body>
                                <Card.Title>{`${toTitleCase(mon.name)}`}</Card.Title>
                                <Card.Text>
                                    {typeString(mon.types)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

PokeCards.propTypes = {
    pokemon: PropTypes.array
}

export default PokeCards;