import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApproveCard';
import './style/App.css';

const App = ()=> {

    return (
        <div className="ui container comments">
            <ApproveCard>
                <CommentDetail 
                    author='Muthu' 
                    date = 'Monday 12:15 AM' 
                    comments='waste of time' 
                    image = {faker.image.nature()} 
                    />
            </ApproveCard>

            <ApproveCard>
                <CommentDetail 
                author='Krish' 
                date = 'Tuesday 01:20 PM' 
                comments='waste of money' 
                image = {faker.image.nature()}
                />
            </ApproveCard>

            <ApproveCard>
            <CommentDetail 
                author='mathi' 
                date = 'Wednesday 08:25 PM' 
                comments='waste of hours'
                image = {faker.image.nature()} 
                />
            </ApproveCard>   
        </div>

    );
}

ReactDom.render(<App />, document.querySelector('#root'));
