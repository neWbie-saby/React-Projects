import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    peas: [
      { name: 'Ted', age: 30},
      { name: 'Marshal', age: 31},
      { name: 'Lily', age: 31}
    ]
  });

  const [otherState, setOtherState] = useState('something More else');

  // console.log(personState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Clicked!')
    // this.state.peas[0].name = "Tracy"; // DOESN'T WORK
    setPersonState({ 
      peas : [
        { name: newName, age: 28 },
        { name: 'Marshal', age: 31},
        { name: 'Robin', age: 32}
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonState({ 
      peas : [
        { name: 'Ted', age: 20 },
        { name: event.target.value, age: 31},
        { name: 'Lily', age: 31}
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
        <h1>It's a React App, chill</h1>
        <button
         style={style}
         onClick={() => switchNameHandler('Tracy')}>
          Switch Names
        </button>
        <Person
         name={personState.peas[0].name}
          age={personState.peas[0].age} />
        <Person
         name={personState.peas[1].name}
          age={personState.peas[1].age}
          click={switchNameHandler.bind(this, 'Zoey')}
          changed={nameChangedHandler} >
            Big Fudge
        </Person>
        <Person
         name={personState.peas[2].name}
          age={personState.peas[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Relax, again a React App'));
}

export default app;