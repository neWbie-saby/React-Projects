import React, { useState, Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    peas: [
      { id: 'sdf21', name: 'Ted', age: 30},
      { id: 'dsfg23', name: 'Marshal', age: 31},
      { id: 'edf54', name: 'Lily', age: 31}
    ],
    showPeas: false
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

    this.setState({peas: persons});

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
      persons = (
        <div>
          {
            this.state.peas.map((p, index) => {
              return (
                <Person click={() => this.deletePersonHandler(index)}
                 name={p.name}
                 age={p.age}
                 key={p.id}
                 changed={(event) => this.nameChangedHandler(event, p.id)} />
              );
            })
          /* <Person
           name={this.state.peas[0].name}
           age={this.state.peas[0].age}
           // onClick={() => switchNameHandler('Tracy')}
           click={() => this.switchNameHandler('Tracy')} />
          <Person
           name={this.state.peas[1].name}
           age={this.state.peas[1].age}
           // click={switchNameHandler.bind(this, 'Zoey')}
           click={this.switchNameHandler.bind(this, 'Zoey')}
           changed={this.nameChangedHandler} >
            Big Fudge
          </Person>
          <Person
           name={this.state.peas[2].name}
           age={this.state.peas[2].age} /> */
          }
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let clases = [];
    if(this.state.peas.length <= 2)
      clases.push('bold');
    if(this.state.peas.length <= 1)
      clases.push('red');

    return (
      // <StyleRoot>
        <div className="App">
          <h1>It's a React App, chill</h1>
          <p className={clases.join(' ')}>Don't get too chilly though, and catch a cold</p>
          <button className="button"
          // <StyledButton alt={this.state.showPeas}
           onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {/* </StyledButton> */}
            {/* <Person
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
              age={personState.peas[2].age} /> */}
          {persons}  
        </div>
      // </StyleRoot>
      );
  }

  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Relax, again a React App'));
}

export default App;
// export default Radium(App);