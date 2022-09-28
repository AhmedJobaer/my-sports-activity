import React from 'react';
import './Activity.css'

const Activity = ({ activity, handelAddToCart }) => {
    const { name, img, info, duration } = activity;

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <p>{name}</p>
                <p>{info}</p>
                <p>Duration: {duration} minutes</p>
            </div>
            <button onClick={() => handelAddToCart(activity)} className='btn-cart'>Add To List</button>
        </div>
    );
};

export default Activity;