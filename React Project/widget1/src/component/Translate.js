import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';



    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        },
        {
            label: 'Tamil',
            value: 'ta'
        }
    ]

    
    
    const Translate = () =>{
        const [language, setLanguage] = useState(options[0]);
        const [text, setText] = useState('');

    return(
        <div>
            <div className='ui form'>
                <div className = 'field'>
                    <label> Enter the Text </label>
                        <input 
                        value={text} 
                        onChange={(e) =>setText(e.target.value)}
                        />
                </div>
            </div>
            <Dropdown 
            label = 'Select a Language'
            options = {options} 
            selected = {language} 
            onSelectedChange = {setLanguage} 
            /> 
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text = {text} language={language} />   

        </div>

    );


}


export default Translate;