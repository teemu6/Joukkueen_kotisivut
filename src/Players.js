import React, { useState } from 'react';

/* Component for Players-page contents */
const Players = ({ teamdata }) => {
  //state to keep track of text input field
  const [userinput, setUserinput] = useState("");
  //handler when change happens in text input, text is copied to the state as lowercase
  const findPlayer = event => {
    const input = event.target.value.toLowerCase();
    setUserinput(input);
  }
  //copy playerlist from teamdata prop to a new object array
  let playerlist = teamdata.players;
  //sort the players in ascending order by the alphabets of last name
  //see inner if clauses in the callback function
  playerlist.sort((a, b) => (a.lname > b.lname) ? 1 : (a.lname < b.lname) ? -1 : 0);

  //creates the rows for the player table by mapping the playerlist array
  const rows = playerlist.map((player, index) => {

    const playername = player.lname.toLowerCase() + " " + player.fname.toLowerCase();
    if (!playername.startsWith(userinput)) {
      //return null, if the user input doesnt match the last names first letters
      //making player not appear in the table
      return null;
    }
    //calculation of the matches where the player has appeared
    let matches = 0;
    for (let i = 0; i < teamdata.matches.length; i++) {
      if (teamdata.matches[i].participants.includes(player.id)) {
        matches++;
      }
    }
    //same as matches, but for practises
    let practises = 0;
    for (let i = 0; i < teamdata.practises.length; i++) {
      if (teamdata.practises[i].participants.includes(player.id)) {
        practises++;
      }
    }
    //calculate the scores of the player in matches
    let scores = 0;
    for (let i = 0; i < teamdata.matches.length; i++) {
      if (teamdata.matches[i].scorers.includes(player.id)) {
        scores++;
      }
    }
    //same as above for assists
    let assists = 0;
    for (let i = 0; i < teamdata.matches.length; i++) {
      if (teamdata.matches[i].assists.includes(player.id)) {
        assists++;
      }
    }

    return (
      <tr key={"row" + index}>
        <td>{player.lname + " " + player.fname}</td>
        <td>{player.number}</td>
        <td>{player.role}</td>
        <td>{matches}</td>
        <td>{practises}</td>
        <td>{scores}</td>
        <td>{assists}</td>
      </tr>
    );
  });

  return (
    <div className="Players">
      Etsi pelaaja: <input autoFocus type="text" onChange={findPlayer} />
      <table>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Pelinumero</th>
            <th>Rooli</th>
            <th>Pelit</th>
            <th>Harjoitukset</th>
            <th>Maalit</th>
            <th>Syötöt</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Players;