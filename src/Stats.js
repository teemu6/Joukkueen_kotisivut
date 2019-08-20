import React, { useState } from 'react';
//npm install --save react-chartjs-2 chart.js
import { HorizontalBar } from 'react-chartjs-2';

/* Component for Statistics-page contents */
const Stats = ({ teamdata }) => {
  //state to keep of track of what player roles should be included in the chart
  const [showroles, setShowroles] = useState("kaikki");
  //state to keep track of the type of statistics to be shown in the chart
  const [statstype, setStatstype] = useState("Tehopisteet");

  //handler that changes states based on the dropdown list changes
  const selectionHandler = (event) => {
    //"role" is the id of dropdown list of player roles kaikki/hyökkääjät/puolustajat
    if (event.target.id === "role") setShowroles(event.target.value);
    //"stat" is the id of dropdown list of statistics that can be displayed in the chart
    if (event.target.id === "stat") setStatstype(event.target.value);
  }

  //settings of the horizontal bar chart
  const barOptions = {
    //responsive "true" to make chart canvas scale to screen
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      titleFontSize: 20,
      bodyFontSize: 20
    },
    title: {
      display: true,
      text: statstype + ' top10: ' + showroles,
      fontSize: 24
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          fontSize: 20
        }
      }],
      xAxes: [{
        position: 'top',
        ticks: {
          beginAtZero: true,
          fontSize: 20,
          precision: 0 // ticks are always one integer 1,2,3,4... NOT like 0.5,1.0,1.5
        }
      }]
    }
  };

  //create list of player objects with information that is chosen by the user
  let players = {};
  //map the teamdata.players property shared by the Parent component
  players = teamdata.players.map((player) => {

    if (showroles === "hyökkääjät" && player.role !== "hyökkääjä") {
      //do not include role that is not selected by the user in the dropdown list
      return null;
    };
    if (showroles === "puolustajat" && player.role !== "puolustaja") {
      //do not include role that is not selected by the user in the dropdown list
      return null;
    };

    //if the user has chosen to display "Tehopisteet" from dropdown 
    //this info will be included to player objects
    if (statstype === "Tehopisteet") {
      //calculate the points (scores + assists) made by the player in all matches
      let points = 0;
      for (let i = 0; i < teamdata.matches.length; i++) {
        for (let k = 0; k < teamdata.matches[i].scorers.length; k++) {
          if (teamdata.matches[i].scorers[k] === player.id) {
            points++;
          }
          if (teamdata.matches[i].assists[k] === player.id) {
            points++;
          }
        }
      }
      return ({
        name: player.lname + " " + player.fname[0] + ".",
        points: points
      })
    }
    //if the user has chosen to display "Maalit" from dropdown
    //this info will be included to player objects
    else if (statstype === "Maalit") {
      //calculate the scores made by the player in all matches
      let scores = 0;
      for (let i = 0; i < teamdata.matches.length; i++) {
        for (let k = 0; k < teamdata.matches[i].scorers.length; k++) {
          if (teamdata.matches[i].scorers[k] === player.id) {
            scores++;
          }
        }
      }
      return ({
        name: player.lname + " " + player.fname[0] + ".",
        scores: scores
      })
    }
    //if the user has chosen to display "Syöttöpisteet" from dropdown
    //this info will be included to player objects
    else if (statstype === "Syöttöpisteet") {
      //calculate the assists made by the player in all matches
      let assists = 0;
      for (let i = 0; i < teamdata.matches.length; i++) {
        for (let k = 0; k < teamdata.matches[i].scorers.length; k++) {
          if (teamdata.matches[i].assists[k] === player.id) {
            assists++;
          }
        }
      }
      return ({
        name: player.lname + " " + player.fname[0] + ".",
        assists: assists
      })
    }
    //if the user has chosen to display "Osall. harjoituksiin" from dropdown
    //this info will be included to player objects
    else if (statstype === "Osall. harjoituksiin") {
      //calculate the entries made by the player in all matches
      let entries = 0;
      for (let i = 0; i < teamdata.matches.length; i++) {
        for (let k = 0; k < teamdata.matches[i].participants.length; k++) {
          if (teamdata.matches[i].participants[k] === player.id) {
            entries++;
          }
        }
      }
      return ({
        name: player.lname + " " + player.fname[0] + ".",
        entries: entries
      })
    }
    //if the user has chosen to display "Osall. peleihin" from dropdown
    //this info will be included to player objects
    else if (statstype === "Osall. peleihin") {
      //calculate the scores made by the player in all practises
      let entries = 0;
      for (let i = 0; i < teamdata.practises.length; i++) {
        for (let k = 0; k < teamdata.practises[i].participants.length; k++) {
          if (teamdata.practises[i].participants[k] === player.id) {
            entries++;
          }
        }
      }
      return ({
        name: player.lname + " " + player.fname[0] + ".",
        entries: entries
      })
    }
    //if the user has not chosen any statistic type in the dropdown (should never happen)
    return null;
  });

  //filter null elements from array
  players = players.filter((e) => e != null);

  //sort the player list depending on what statistics is chosen
  let chartdata = {};
  if (statstype === "Tehopisteet") {
    players.sort((a, b) => (a.points < b.points) ? 1 : (a.points > b.points) ? -1 : 0);
    chartdata = players.map((player) => player.points);
  }
  else if (statstype === "Maalit") {
    players.sort((a, b) => (a.scores < b.scores) ? 1 : (a.scores > b.scores) ? -1 : 0);
    chartdata = players.map((player) => player.scores);
  }
  else if (statstype === "Syöttöpisteet") {
    players.sort((a, b) => (a.assists < b.assists) ? 1 : (a.assists > b.assists) ? -1 : 0);
    chartdata = players.map((player) => player.assists);
  }
  else if (statstype === "Osall. harjoituksiin" || statstype === "Osall. peleihin") {
    players.sort((a, b) => (a.entries < b.entries) ? 1 : (a.entries > b.entries) ? -1 : 0);
    chartdata = players.map((player) => player.entries);
  }
  //include only top 10 in the player list
  chartdata = chartdata.slice(0, 10);

  //create labels for the players in the chart
  let chartlabels = players.map((player) => player.name);
  //include only top 10, so amount of chartdata and labels match
  chartlabels = chartlabels.slice(0, 10);

  //put all the info created into a single variable that can be passed to Chart.js HorizontalBar-component
  const data = {
    labels: chartlabels,
    datasets: [{
      label: statstype,
      backgroundColor: 'green',
      borderColor: 'green',
      data: chartdata,
    }]
  };

  return (<div id="chartContainer">
    Rooli: <select id="role" value={showroles} onChange={selectionHandler}>
      <option key="all" value="kaikki">Kaikki</option>
      <option key="forwards" value="hyökkääjät">Hyökkääjät</option>
      <option key="defenders" value="puolustajat">Puolustajat</option>
    </select><br />
    Tilasto: <select id="stat" value={statstype} onChange={selectionHandler}>
      <option key="Tehopisteet" value="Tehopisteet">Tehopisteet</option>
      <option key="Maalit" value="Maalit">Maalit</option>
      <option key="Syöttöpisteet" value="Syöttöpisteet">Syöttöpisteet</option>
      <option key="Osall.harj" value="Osall. harjoituksiin">Osall. harjoituksiin</option>
      <option key="Osall.pelit" value="Osall. peleihin">Osall. peleihin</option>
    </select>
    <hr />
    <HorizontalBar data={data} options={barOptions} />
  </div>
  );
}

export default Stats;