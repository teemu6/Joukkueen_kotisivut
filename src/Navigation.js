import React from 'react';

/* Component to create page navigation */
const Navigation = ({ content, changeContent }) => {
  //create object for the list elements attributes
  const links = [
    { "id": "main", "title": "Pääsivu" },
    { "id": "matches", "title": "Ottelut" },
    { "id": "practises", "title": "Harjoitukset" },
    { "id": "players", "title": "Pelaajat" },
    { "id": "stats", "title": "Tilastot" }
  ];

  //create "li"-elements for the list
  const lilist = links.map((links) => {

    if (links.id === content) {
      //link for the "active" page that is displayed, has unique class for styling
      return <li
        key={links.id}
        id={links.id}
        onClick={changeContent}
        className="active">
        {links.title}
      </li>;
    }
    else {
      //links for "inactive" pages that are not displayed currently
      return <li
        key={links.id}
        id={links.id}
        onClick={changeContent}>
        {links.title}
      </li>;
    }

  });
  return (
    <nav className="App-nav">
      <ul>
        {lilist}
      </ul>
    </nav>
  );
}

export default Navigation;