import { useState } from 'react';
import PropTypes from 'prop-types';

function PokeForm ({ setPokeName }) {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setPokeName(input);
    }

    return (
        <>
            <div id='inputCont'>
                <form id='userInput' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='pokeName'
                        placeholder="Enter a pokemon's name:"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <input type='submit' onSubmit={handleSubmit}/>
                </form>
            </div>
        </>
    )
}

PokeForm.propTypes = {
 setPokeName: PropTypes.func
}

export default PokeForm;