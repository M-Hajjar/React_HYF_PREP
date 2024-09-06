import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const response = await fetch('https://www.randomuser.me/api?results=1');
    const data = await response.json();
    const personData = {
      first_name: data.results[0].name.first,
      last_name: data.results[0].name.last,
      email: data.results[0].email,
    };
    setPerson(personData);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}

export default PersonController;
