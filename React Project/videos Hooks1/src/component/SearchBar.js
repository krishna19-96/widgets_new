import React, { useState } from 'react';


const SearchBar = ({onFormSubmit}) =>{
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); // Pervent the browser refresh 

        onFormSubmit(term);
    };

    return (
        <div className='search-bar ui segment'>
            <form onSubmit = {onSubmit} className='ui form'>
                <div className='field'>
                    <label> Wetube Videos</label>
                    <input 
                    type='text' 
                    placeholder='Search' 
                    value={term}
                    onChange = {(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
            
        </div>


    )

}





export default SearchBar;