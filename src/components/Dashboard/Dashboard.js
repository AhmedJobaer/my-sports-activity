import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Activity/Cart/Cart';
import './Dashboard.css'

const Dashboard = () => {

    const [activities, setActivity] = useState([]);
    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])

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
                            ></Activity>)
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <Cart></Cart>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;