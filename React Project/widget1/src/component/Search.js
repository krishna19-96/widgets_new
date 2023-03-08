import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Search = () =>{
    const [term, setTerm] = useState('programming');
    const [result, setResult] = useState([]);
    
    

    useEffect(() => {
        const search = async () => {
           const {data} =  await axios.get('https://en.wikipedia.org/w/api.php',
            {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResult(data.query.search);
        };
    
    if (term && !result.length){
        search();
    }   
    else{
        
    const timeoutId = setTimeout(() =>{
        if (term){
            search();
    }    

    }, 500);

    return () =>{
        clearTimeout(timeoutId)
    };

    } 


    }, [term]);

    const renderedResult = result.map((result)=> {
        return(
            <div key = {result.pageid}className= 'item'>
                <div className='right floated content'>
                    <a 
                    className='ui button'
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}} ></span>
                </div>
                
            </div>

        );

    });
    

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                 <label>Enter the search key </label>
                 <input 
                    value = {term}
                    onChange = {(e)=> setTerm(e.target.value) }
                    
                     className= 'input'
                    />
            
                </div>
                <div className='ui celled list'> 
                    {renderedResult}
                </div>

            </div>
        </div>
    );
}

export default Search;