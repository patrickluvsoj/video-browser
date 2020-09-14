import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');
    
    const onInputChange = event => {
        setTerm(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search Bar</label>
                    <input type="text" 
                        value={term} 
                        onChange={onInputChange}
                        placeholder="Search...">
                    </input>
                </div>
            </form>
        </div>
    );

};

export default SearchBar