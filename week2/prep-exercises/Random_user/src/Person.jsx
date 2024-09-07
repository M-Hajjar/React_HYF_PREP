function Person({ person }) {
  if (!person) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      <li>First Name: {person.first_name}</li>
      <li>Last Name: {person.last_name}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
}

export default Person;