import React from 'react';

/* Component that displays the team banner on top of the page */
const Header = () => {
  const teamname = "Huutoniemen Hoki";
  const shortname = "HH";
  return (
    <header className="App-header">
      <p>{shortname}</p>
      <h1>{teamname}</h1>
    </header>
  );
}

export default Header;