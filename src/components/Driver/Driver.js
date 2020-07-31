import React, { useEffect, useRef, useContext } from 'react';

import classes from './Driver.css';
import AuthContext from '../../context/auth-context';

const driver = (props) => {
    const toggleRef = useRef(null);

    const authContext = useContext(AuthContext);
    // console.log(authContext.authenticated);

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
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
}

export default driver;