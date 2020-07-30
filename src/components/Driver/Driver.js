import React, { useEffect, useRef } from 'react';

import classes from './Driver.css';

const driver = (props) => {
    const toggleRef = useRef(null);

    useEffect(() => {
        console.log("[Driver.js] useEffect");
        setTimeout(() => {
            alert("Saved to DB");
        }, 1000);
        toggleRef.current.click();
        return () => {
            console.log("[Driver.js] cleanup in useEffect");
        };
    }, []);

    useEffect(() => {
        console.log("[Driver.js] 2nd useEffect");
        return () => {
            console.log("[Driver.js] cleanup in 2nd useEffect");
        };
    });

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPeas)
        btnClass = classes.Red;

    if(props.peas.length <= 2)
      assignedClasses.push(classes.bold);
    if(props.peas.length <= 1)
      assignedClasses.push(classes.red);

    return (
        <div className={classes.Driver}>
            <h1>It's a {props.title}, chill</h1>
            <p className={assignedClasses.join(' ')}>Haa.......ve-you-met Ted?!</p>
            <button
             ref={toggleRef}
             className={btnClass}
             onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}

export default driver;