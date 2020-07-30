import React, { useState, Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
// import logo from './logo.svg';
import classes from './App.css';
import Driver from '../components/Driver/Driver';
import Persons from '../components/PersonList/PersonList';
import ErrBoundary from '../components/ErrBoundary/ErrBoundary';

class App extends Component{

  state = {
    peas: [
      { id: 'sdf21', name: 'Ted', age: 30},
      { id: 'dsfg23', name: 'Marshal', age: 31},
      { id: 'edf54', name: 'Lily', age: 31}
    ],
    showPeas: false,
    keysCounter: 0
  }

// const app = props => {
//   const [personState, setPersonState] = useState({
//     peas: [
//       { name: 'Ted', age: 30},
//       { name: 'Marshal', age: 31},
//       { name: 'Lily', age: 31}
//     ]
//   });

//   const [otherState, setOtherState] = useState('something More else');

  // console.log(personState, otherState);

  switchNameHandler = (newName) => {
    // this.state.peas[0].name = "Tracy"; // DOESN'T WORK
    this.setState({ 
      peas : [
        { name: newName, age: 28 },
        { name: 'Marshal', age: 31},
        { name: 'Robin', age: 32}
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const pIndex = this.state.peas.findIndex(p => {
      return p.id === id;
    })

    // const onePerson = Object.assign({}, this.state.peas[pIndex]);
    const onePerson = {...this.state.peas[pIndex]};

    onePerson.name = event.target.value;

    const persons = [...this.state.peas];
    persons[pIndex] = onePerson;

    this.setState((oldState, props) => {
      return {
        peas: persons,
        keysCounter: oldState.keysCounter + 1
      };
    });

    // this.setState({ 
    //   peas : [
    //     { name: 'Ted', age: 20 },
    //     { name: event.target.value, age: 31},
    //     { name: 'Lily', age: 31}
    //   ]
    // })
  }

  togglePersonsHandler = () => {
    const d = this.state.showPeas;
    this.setState({ showPeas: !d });
  }

  deletePersonHandler = (pIndex) => {
    // const persons = this.state.peas.slice();
    const persons = [...this.state.peas];
    persons.splice(pIndex, 1);
    this.setState({peas: persons});
  }

  render(){
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };
  
    let persons = null;

    if(this.state.showPeas){
      persons = <Persons
             people={this.state.peas}
             clicked={this.deletePersonHandler}
             changed={this.nameChangedHandler}
            />
            
          /* 
          <Person
           name={this.state.peas[1].name}
           age={this.state.peas[1].age}
           // click={switchNameHandler.bind(this, 'Zoey')}
           click={this.switchNameHandler.bind(this, 'Zoey')}
           changed={this.nameChangedHandler} >
            Big Fudge
          </Person>
          */
          
          // style.backgroundColor = 'red';
          // style[':hover'] = {
          //   backgroundColor: 'salmon',
          //   color: 'black'
          // }
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Driver
           title={this.props.appTitle}
           showPeas={this.state.showPeas}
           peas={this.state.peas}
           clicked={this.togglePersonsHandler}/>
          {/* </StyledButton> */}
            {/*
            <Person
            name={personState.peas[1].name}
              age={personState.peas[1].age}
              click={switchNameHandler.bind(this, 'Zoey')}
              changed={nameChangedHandler} >
                Big Fudge
            </Person>
            */}
          {persons}  
        </div>
      // </StyleRoot>
      );
  }

  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Relax, again a React App'));
}

export default App;
// export default Radium(App);