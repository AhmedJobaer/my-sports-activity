import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addToDb, getStoredCart } from '../../utilities/fakedb';


import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    //console.log(cart);
    let totalTime = 0;
    for (const activity of cart) {
        totalTime = totalTime + activity.duration;
    }


    const [brTime, setBrTime] = useState([])
    useEffect(() => {

        //console.log(brTime);
        //localStorage.setItem('brTime', brTime);
        const getItem = getStoredCart();

    }, [brTime])



    //const [breakTime, setBreakTime] = useState(0)



    let newBreakTime = 0;
    const breakTimeHandel = (time) => {
        newBreakTime = newBreakTime + time;
        addToDb(newBreakTime);
        setBrTime(newBreakTime);

        newBreakTime = 0;
    }


    const notify = () => toast("Activity completed, keep it up!");
    return (
        <div className='cart'>
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
                <button className='btn-second' onClick={() => breakTimeHandel(10)}>10 min</button>
                <button className='btn-second' onClick={() => breakTimeHandel(20)}>20 min</button>
                <button className='btn-second' onClick={() => breakTimeHandel(30)}>30 min</button>
                <button className='btn-second' onClick={() => breakTimeHandel(40)}>40 min</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='excution'>
                <h4>Exercise Time</h4>
                <p>{totalTime} <small>Min</small></p>
            </div>
            <div className='excution'>
                <h4>Break Time</h4>
                <p>{brTime}<small> Min</small></p>
            </div>
            <button className='btn-complete' onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Cart;