import React, { useState } from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';
import Route from './component/Route';
import Header from './component/Header';



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

    // const showAccordion = () =>{
    //     if(window.location.pathname === '/'){
    //         return <Accordion items = {items} />;
    //     }
    // };

    // const showList = () =>{
    //     if(window.location.pathname === '/list'){
    //         return <Search />;

    //     }
    // };

    // const showDropdown = ()=> {
    //     if(window.location.pathname === '/dropdown'){
    //         return <Dropdown />;
    //     }
    // };

    // const showTranslate = () =>{
    //     if(window.location.pathname === '/translate'){
    //         return <Translate />;
    //     }
    // };
    // instead this we use Route check below

    return ( 
        <div>      
            <Header />
            <Route path='/'>
                <Accordion items = {items}/>
            </Route>     

            <Route path = '/list'>
                <Search />
            </Route>

            <Route path = '/dropdown'>
                <Dropdown 
                label = 'Select a color'
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}


                />
            </Route>

            <Route path = '/translate'>
                <Translate />
            </Route>

        

        </div>

        );

};