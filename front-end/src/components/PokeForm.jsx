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
            <Form className='flex flex-row items-baseline'>
                <Form.Label className="mr-4 text-gray-200" htmlFor='inputQuery'>Search: </Form.Label>
                <Form.Control
                    className='w-40'
                    size='sm'
                    type='text'
                    id='inputQuery'
                    value={input}
                    placeholder='Type here: '
                    onChange={e => setInput(e.target.value)}
                />
                <Form.Control size='sm' type='submit' id='submitButton' onClick={handleSubmit}/>
            </Form>
        </>
    )
}

PokeForm.propTypes = {
 setPokeName: PropTypes.func
}

export default PokeForm;