import React from 'react';
import Person from './Person/Person';

const personsList = props => props.people.map((p, index) => {
    return (
        // <ErrBoundary key={p.id}>
        <Person click={() => props.clicked(index)}
        name={p.name}
        age={p.age}
        key={p.id}
        changed={(event) => props.changed(event, p.id)} />
      // </ErrBoundary>
    );
  })

export default personsList;