import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({options, selected, onSelectedChange}) =>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const onBodyClick = (event) =>{
            if (ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return() => {
            document.body.removeEventListener('click', onBodyClick);
        };
    },[] );

    const renderedOption = options.map((option) =>{
        if(option.value === selected.value){
            return null;
        }


        return(
            <div 
            key = {option.value} 
            className= 'item'
            onClick = {() => onSelectedChange(option)}
            >
            {option.value}
            </div>

        );
    })


    return(
        <div ref = {ref} className="ui form">
            <div className="field">
                <label className="label">Select a color </label>
                <div
                onClick={()=> setOpen(!open)} 
                className={`ui selection dropdown ${open ? `visible active`: ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className='text'> {selected.value} </div>
                    <div 
                    className={`menu ${open ? `visible transition`: ''}`}
                    >
                        {renderedOption}
                    </div>
                </div>
            </div>
            <div>
                <span style={{color: `${selected.value}`}} >                                                                                                  
                     {selected.label}
                </span> 
            </div>
        </div>
        

    ); 
   
}




export default Dropdown;