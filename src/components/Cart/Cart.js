import React, { useState } from 'react';

/* import { addToDb, getStoredCart } from '../../utilities/fakedb'; */


import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    //console.log(cart);
    let totalTime = 0;
    for (const activity of cart) {
        totalTime = totalTime + activity.duration;
    }

    /*     useEffect(() => {
            const storedCart = getStoredCart();
            const addedTime = setBreakTime();
            console.log(storedCart);
    
        }, []) */




    const [breakTime, setBreakTime] = useState(0)



    let newBreakTime = 0;
    const breakTimeHandel = (time) => {
        newBreakTime = newBreakTime + time;
        setBreakTime(newBreakTime);
        newBreakTime = 0;
    }

    return (
        <div className='cart'>
            <h4>This cart</h4>
            <p>selected item: {cart.length}</p>
            <div className='cart-bar'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvT59urBwJHSQXaH3g7IlcOkYg6qgN252OhLouqTxZ66ROulvZ_5Xs1LnMgUG_h_JCP8&usqp=CAU" alt="" />
                <div className='profile'>
                    <h2 className='profile-name'>Asif Ahmed</h2>
                    <p className='location'>Kuala Lumpur, Malaysia</p>
                </div>
            </div>
            <div className='info'>
                <div>
                    <h3>5.5</h3>
                    <p>Weight</p></div>
                <div>
                    <h3>22 <small>yrs</small></h3>
                    <p>Age</p>
                </div>
                <div>
                    <h3>22 <small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add a Break</h3>
            <div>
                <button onClick={() => breakTimeHandel(10)}>10 min</button>
                <button onClick={() => breakTimeHandel(20)}>20 min</button>
                <button onClick={() => breakTimeHandel(30)}>30 min</button>
                <button onClick={() => breakTimeHandel(40)}>40 min</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='excution'>
                <h4>Exercise Time</h4>
                <p>{totalTime} <small>Min</small></p>
            </div>
            <div className='excution'>
                <h4>Break Time</h4>
                <p>{breakTime}<small> Min</small></p>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Cart;