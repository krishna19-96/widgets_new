import React from 'react';


class SearchBar extends React.Component{
    state = {term: ''};

    onFormSubmit = event =>{
        event.preventDefault();

        this.props.onSubmit(this.state.term)


    }
   

    render(){
        return( 
        <div className='ui segment'>
            <form onSubmit = {this.onFormSubmit} className = 'ui form'>
                <div className = 'field'>
                    <label>Search Keywords</label>
                    <input 
                    type='text' 
                    placeholder='Enter the image Keyword' 
                    value = {this.state.term}
                    onChange= {e=> this.setState({term: e.target.value})}
                    />
                </div>
                {this.state.term.length < 4 ? 'Enter atleast 3 characters' : ''}
            </form>
        </div>
        );

    }

}
export default SearchBar;