import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px blue;
    padding: 15px;
    text-align: center;

    @media (min-width: 500px): {
        width: '450px'
    }
`;

const person = (props) => {
    // const stylE = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <StyledDiv>
        {/* <div className="Person" style={stylE}> */}
            <p onClick={props.click}>It's {props.name} & I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        {/* </div> */}
        </StyledDiv>
    );
};

export default person;
// export default Radium(person);