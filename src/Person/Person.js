import React from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css';


const person = (props) => {
    // const stylE = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>It's {props.name} & I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
// export default Radium(person);