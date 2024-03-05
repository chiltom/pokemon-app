import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function PokeForm ({ setPokeName }) {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setPokeName(input);
        setInput("");
    }

    return (
        <>
            <Form>
                <Form.Label htmlFor='inputQuery'>Search: </Form.Label>
                <Form.Control
                    size='sm'
                    type='text'
                    id='inputQuery'
                    value={input}
                    placeholder='Type here: '
                    onChange={e => setInput(e.target.value)}
                />
                <Form.Control type='submit' onClick={handleSubmit}/>
            </Form>
        </>
    )
}

PokeForm.propTypes = {
 setPokeName: PropTypes.func
}

export default PokeForm;