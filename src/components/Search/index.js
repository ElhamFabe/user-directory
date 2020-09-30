import React, { useState } from 'react';

function SearchBar(props) {
    const [userInput, setUserInput] = useState('');

    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <input 
                    onChange={ (e) => {
                        setUserInput(e.value)
                    }}
                    value = {userInput}
                    type="text" className="form-control" placeholder="First name" />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit = { (e) => {
                    props.search(e, userInput)
                }}>Sign in</button>
            </div>
        </form>
    )
}

export default SearchBar;