import React from 'react';
import Main from './Main';
import Matches from './Matches';
import Practises from './Practises';
import Players from './Players';
import Stats from './Stats';

/* Component that switches the page view depending on the 
"content" prop passed to it by the Parent component.
Also shares the "data" prop as a prop for its child components */
const Content = ({ content, data }) => {
  let selected_content;
  if (content === "main") selected_content = <Main />;
  if (content === "matches") selected_content = <Matches teamdata={data} />;
  if (content === "practises") selected_content = <Practises teamdata={data} />;
  if (content === "players") selected_content = <Players teamdata={data} />;
  if (content === "stats") selected_content = <Stats teamdata={data} />;

  return (
    <section className="App-content">
      {selected_content}
    </section>
  );
}

export default Content;