import React, { useState } from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';



const items =[
    {
        title: 'What is react?',
        content: 'React is a JS Library',
    },
    {
        title: 'Why use react?',
        content: 'React is famouse and Its contain lot inbuild libraries.',
    },
    {
        title: 'Why you choose react?',
        content: 'Its easy for beginners',

    }

];

const options =[
    {
        label: 'The Color Red',
        value: 'red',
        

    },
    {
        label: 'The Color yellow',
        value: 'yellow',
        
    },
    {
        label: 'The Color Blue',
        value: 'blue',
        
    }
];




export default () =>{
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return ( 
        <div> 
            <br />
            <button onClick = {() => setShowDropdown(!showDropdown)}> 
                Toggle button 
            </button>
            <div>
                <hr
                style={{
                    background: 'black',
                    height: '0.5px',
                }} />

                
            </div>
            <br/>
            { showDropdown ? (
                <Dropdown 
                selected = {selected}
                onSelectedChange = {setSelected}
                options = {options}
                /> 
            ): null
            } 
        {/* <Accordion items = {items} /> */}

        </div>

        );

};