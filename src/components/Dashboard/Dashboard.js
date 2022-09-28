import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

import './Dashboard.css'

const Dashboard = () => {

    const [activities, setActivity] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])


    const handelAddToCart = (activity) => {
        console.log(activity);
        const newCart = [...cart, activity]
        setCart(newCart);
    }


    return (

        <div>

            <div className='dashboard-container'>
                <div  >
                    <div className='title'>
                        <h1>My-Sports-Activity</h1>
                        <h2>Select today's exercise</h2>
                    </div >
                    <div className='activity-container'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handelAddToCart={handelAddToCart}
                            ></Activity>)
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;