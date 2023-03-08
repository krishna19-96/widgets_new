//1. Import react and reactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom/client';

//2. Get a reference to the div with ID root 
const el = document.getElementById('root');

//3. Tell react to take control of the element
const root = ReactDOM.createRoot(el);

//4. Create Component
function App() {
   
   
    /* print message using random number
   let message = "Fail";
    if(Math.random()>0.5){
        message = "Pass";
    }
    return <h1> {message}</h1>
*/

/* Display time used to create two variable and call into return fun
const date = new Date();
const time = date.toLocaleTimeString();

    return <h1> {time}</h1>
*/
 
/* Display date and time inside the return fun

    return <h1> {new Date().toLocaleTimeString()}</h1>
*/

/* Create two variable and print into an single return

const name = "Muthu";
const age = 27;

return (
<div>
    <div>My name is {name}</div>
    <div>My age is {age}</div>

</div> 
);
*/
/* input value direct declare inside the return 
return <input type= "number" min={5} max={10}/>
*/

/* create a variable and pass the value inside the return
const inputType = "number"
const minValue = 5;
const maxValue = 10;

return (

    <input 
    type = {inputType}
    min = {minValue} 
    max = {maxValue}
    />
    
);
*/

/* Customize element with properties
const message = 'Enter Age';

return (

    <input 
    type = "number"
    min = {20}
    max = {60}
    list = {[1,2,3]}
    style = {{border: '2px solid red'}}
    alt = {message}
    />
);
*/

/* Textarea autofocus 

return <textarea autoFocus = {true} />
*/
/* input field max length

return <input maxLength = {5} />
*/

/* Boolean value Spellcheck

return <input spellCheck = {false}/>
*/

/* Apply style in the JSX
return <input style={{border: '2px solid green'}} autoFocus = {true} />
*/

/* quest 1

return (

    <div>
        <input readonly />
    </div>
);
*/

/* ques 2
return (
    <input placeholder = "Hi there" />
);
*/
return <input />
}




//5. Show component on the Screen
root.render(<App />);