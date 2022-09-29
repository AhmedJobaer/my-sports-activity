import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='blog-header'>This is Blog Section</h1>
            <div className='q-1'>
                <h3>How React Work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='q-1'>
                <h3>Difference Between props and state in react?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className='q-1'>
                <h3>Use of UseEffect except data load.</h3>
                <p>We can use useEffect for validating input field. Validating an input while it's receiving characters is another great application for useEffect. We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies. We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger.</p>
            </div>
        </div>
    );
};

export default Blog;