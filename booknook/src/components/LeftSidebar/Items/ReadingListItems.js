import React from 'react'; 

const ReadingListItem = () => {
    return (
        <div className="rl-item">
            <div>
                <img src='book' alt=""></img>
            </div>
            <div>
                <h5 className='rl-header'>Header</h5>
                <p className='rl-header-small'><span></span>Books</p>
            </div>
        </div>

    );
};



export { ReadingListItem }