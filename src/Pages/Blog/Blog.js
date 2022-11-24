import React from 'react';

const Blog = () => {
    return (
        <div className='mx-12 text-justify my-20'>
            <h2 className='text-center text-3xl font-bold uppercase mb-8 text-blue-500'>Our Blogs</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2   gap-10'>
                <div className='shadow-lg px-10 py-7 bg-slate-700  rounded'>
                    <h4 className='text-2xl font-semibold mb-3 text-white'>what are the different ways to manage a state in a react application?</h4>
                    <p className='text-sky-400'>It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change.React Router is a great tool to handle routes and manage the params.</p>
                </div>
                <div className='shadow-lg px-10 py-7 bg-slate-700  rounded'>
                    <h4 className='text-2xl font-semibold mb-3 text-white'>How does prototypical inheritance work?</h4>
                    <p className='text-sky-400'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div className='shadow-lg px-10 py-7 bg-slate-700  rounded'>
                    <h4 className='text-2xl font-semibold mb-3 text-white'>What is a unit test, why should we write unit tests?</h4>
                    <p className='text-sky-400'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
                <div className='shadow-lg px-10 py-7 bg-slate-700  rounded'>
                    <h4 className='text-2xl font-semibold mb-3 text-white'>React vs Angular vs Veu</h4>
                    <p className='text-sky-400 mb-3'>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. </p>
                    <p className='text-sky-400 mb-3'>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. </p>
                    <p className='text-sky-400'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;