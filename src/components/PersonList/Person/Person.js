import React, { Component } from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withProps from '../../../hoc/withProps';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    // const stylE = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    // const r = Math.random();
    // if(r > 0.7)
    //     throw new Error("Something went wrong");

    componentDidMount(){
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        return (
            // <div className={classes.Person}>
            // <React.Fragment>
            <Aux>
                <p onClick={this.props.click}>It's {this.props.name} & I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type='text'
                //  ref={(inEle) => {this.inputElement = inEle}}
                 ref={this.inputElementRef}
                 onChange={this.props.changed}
                 value={this.props.name} />
            </Aux>
            // </React.Fragment>
            //</div>
        );
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withProps(Person, classes.Person);
// export default Radium(person);