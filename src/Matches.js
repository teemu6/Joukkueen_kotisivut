import React, { useState } from 'react';

/* Component for Matches-page contents */
const Matches = ({ teamdata }) => {

  //state to keep record of table rows that are "opened" to display scores/assists
  const [rowInfo, setRowInfo] = useState(
    //initializing the state: create a array that is the length of total rows
    //then set the data as boolean type "false" (not shown by default) for each element
    Array(teamdata.matches.length).fill(false)
  );

  /* 
  Handler that is called on a row click. 
  Toggles state of scores & assists (display/hide)
  */
  const Toggle = index => {
    //copy the current state to a variable
    let rowInfos = [...rowInfo];
    //reverse the boolean on the array element stated by index parameter
    rowInfos[index] = !rowInfos[index];
    //update state with the changes
    setRowInfo(rowInfos);
  };

  /* 
  Mapping that creates the rows of matches from raw data.
  .slice(0) -creates a copy of the array, because .reverse mutates original
  .reverse -changes the order of matches so that the newest are on top of table
  */
  const rows = teamdata.matches.slice(0).reverse().map((match, index) => {
    let resultClass; //class for styling the result cell
    let result; //result of match to display in the result cell
    if (match.ourgoals < match.theirgoals) {
      resultClass = "Defeat";
      result = "Häviö";
    }
    else if (match.ourgoals > match.theirgoals) {
      resultClass = "Win";
      result = "Voitto";
    }
    else {
      resultClass = "Draw";
      result = "Tasapeli";
    }

    //create list of scorers for the row
    const scores = [];
    for (let i = 0; i < match.scorers.length; i++) {
      //scorer is only listed as "id" in "teamdata.scorers"-array
      //player data must be fetched from object-array "teamdata.players" that matches the same player id
      let player = teamdata.players.find(object => object.id === match.scorers[i]);
      //push the list element into array, "key" must be unique for React requirements
      //1goal_of2 for example, first goal of match id 2 <- always creates unique key string
      scores.push(<li key={i + "goal_of" + match.id}>{player.lname + " " + player.fname[0] + "."}</li>);
    }

    //create list of assists for the row, similar to the scorers above
    const assists = [];
    for (let i = 0; i < match.assists.length; i++) {
      let player = teamdata.players.find(object => object.id === match.assists[i]);
      assists.push(<li key={i + "assist_of" + match.id}>{player.lname + " " + player.fname[0] + "."}</li>);
    }

    return (
      <tr key={"row" + index} onClick={() => Toggle(index)}>
        <td>
          {match.date}
        </td>
        <td >{match.location}
          <div className={rowInfo[index] ? "Show" : "Hide"}>
            <p><u><b>Maalit:</b></u></p>
            <ul className="Scores">{scores}</ul>
          </div>
        </td>
        <td>
          {match.opponent}
          <div className={rowInfo[index] ? "Show" : "Hide"}>
            <p ><u><b>Syötöt:</b></u></p>
            <ul className="Assists">{assists}</ul>
          </div>
        </td>
        <td className={resultClass}>
          {match.ourgoals} - {match.theirgoals} {result}
        </td>
      </tr>
    );
  });

  return (
    <table className="Matches">
      <thead>
        <tr>
          <th>Päivämäärä</th>
          <th>Paikka</th>
          <th>Vastustaja</th>
          <th>Tulos</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default Matches;