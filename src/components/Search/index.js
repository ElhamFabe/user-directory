import React, { useState } from 'react';

function SearchBar(props) {
    const [userInput, setUserInput] = useState('');

    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <input 
                    onChange={ (e) => {
                        setUserInput(e.target.value);
                    }}
                    value = {userInput}
                    type="text" className="form-control" placeholder="Search By First Name" />
                </div>
                <button type="submit" className="btn btn-primary" onClick = { (e) => {
                    props.search(e, userInput)
                }}>Search</button>
            </div>
        </form>
    )
}

export default SearchBar;