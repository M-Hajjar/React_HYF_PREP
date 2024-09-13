import { useState } from 'react';
import Person from './Person';

function PersonController() {
  const [people, setPeople] = useState([]);

  const getPeople = async (numberOfPeople) => {
    const response = await fetch(`https://www.randomuser.me/api?results=${numberOfPeople}`);
    const data = await response.json();

    const peopleData = data.results.map((person) => ({
      first_name: person.name.first,
      last_name: person.name.last,
      email: person.email,
    }));

    setPeople(peopleData);
  };

  return (
    <div>
      <button onClick={() => getPeople(1)}>get 1 Random Person</button>
      <button onClick={() => getPeople(10)}>get 10 Random People</button>

      {people.length > 0 ? (
        people.map((person, index) => <Person key={index} person={person} />)
      ) : (
        <p>No people to show. Click a button to get data.</p>
      )}
    </div>
  );
}

export default PersonController;
