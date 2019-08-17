import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import './App.css';
import axios from 'axios';

/* The main component that contains all the components of the site */
const App = () => {
  const [content, setContent] = useState("main");
  const [teamdata, setTeamData] = useState([]);

  /*
  Handler for changing page content depending on clicked navigation link
  Called from Navigation-component
  */
  const handleContent = event => {
    //changes state of "content" as the clicked element id
    //see Content-component for more info
    setContent(event.target.id);
  }

  /* 
  This will be run after page is loaded FIRST TIME only(because of []-parameter).
  Gets teamdata.json from server and sets it as "teamdata" state 
  */
  useEffect(() => {
    //axios is the library for easy ajax calls
    //"npm install --save axios"
    axios.get('teamdata.json')
      .then(response => {
        setTeamData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <article className="App">
      <Header />
      <Navigation content={content} changeContent={handleContent} />
      <Content content={content} data={teamdata} />
    </article>
  );
}

export default App;