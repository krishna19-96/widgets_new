import React from 'react';
import  ReactDOM  from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'; 
import './style/App.css';

/*
//component based get location 
const App = () =>{
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err=> console.log(err)
    );

return <div>Hi There</div>

};

/*
class App extends React.Component{
render(){
    window.navigator.geolocation.getCurrentPosition(

        position => console.log(position),
        err => console.log(err)
    );

    return <div> Hi There !</div>;
}


};
}



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={lat: null, errorMessage:''};
}
*/


class App extends React.Component{

state = {lat:null, errorMessage: ''};



    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            positions => this.setState({ lat:positions.coords.latitude }),
            err=> this.setState({errorMessage: err.message})
            );


    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
            //return<div>Latittude: {this.state.lat}</div>
        }
         return <Spinner message = 'Please accept the location request'/>


    }
    
render(){
        
        return <div className = 'border red'>{this.renderContent()}</div>;
    }

}




ReactDOM.render(<App />, document.querySelector('#root'));