import React from 'react';


const ApproveCard = (props) => {
    
    return(
        <div className='ui card'>
            
            <div className='Body content'>{props.children}</div>
                <div className= 'extra two content'>
                    <div className='ui two buttons'>
                         <div className='ui green color button'>Approve</div>
                         <div className='ui red color button'>Reject</div>                       
                    </div>
                </div>
        </div>



    );



}

export default ApproveCard;