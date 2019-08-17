import React, { useState } from 'react';

/* Component for Practises-page contents */
const Practises = ({ teamdata }) => {
  //state to keep record of table rows that are "opened" to display participants for practises
  const [rowInfo, setRowInfo] = useState(
    //initializing the state: create a array that is the length of total practise rows
    //then set the data as boolean type "false" (not shown by default) for each element
    Array(teamdata.practises.length).fill(false)
  );

  /* 
  Handler that is called on a row click. 
  Toggles state of participants list (display/hide)
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
  Mapping that creates the rows of practises from raw data.
  .slice(0) -creates a copy of the array, because .reverse mutates original
  .reverse -changes the order of practises so that the newest are on top of table
  */
  const rows = teamdata.practises.slice(0).reverse().map((practise, index) => {

    const participants = [];
    for (let i = 0; i < practise.participants.length; i++) {
      //participant is only listed as "id" in "practise.participants"-array
      //player data must be fetched from object-array "teamdata.players" that matches the same player id
      let player = teamdata.players.find(object => object.id === practise.participants[i]);
      //push the list element into array, "key" must be unique for React requirements
      //1participant_of2 for example, first participant of practise id 2 <- always creates unique key string
      participants.push(<li key={i + "participant_of" + practise.id}>{player.lname + " " + player.fname[0] + "."}</li>);
    }

    return (
      <tr key={"row" + index} onClick={() => Toggle(index)}>
        <td>
          {practise.date}
        </td>
        <td >
          {practise.location}
        </td>
        <td>
          {practise.participants.length}
          <div className={rowInfo[index] ? "Show" : "Hide"}>
            <ul className="Participants">{participants}</ul>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <table className="Practises">
      <thead>
        <tr>
          <th>Päivämäärä</th>
          <th>Paikka</th>
          <th>Osallistujat</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default Practises;