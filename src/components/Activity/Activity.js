import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { name, img, info, duration } = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <p>{name}</p>
                <p>{info}</p>
                <p>Duration: {duration}</p>
            </div>
            <button>Add To List</button>
        </div>
    );
};

export default Activity;