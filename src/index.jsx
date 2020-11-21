import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Joke from './Joke';
import { jokes } from './jokes.js';

console.log(jokes);

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((x) => (
          <Joke
            id={x.id}
            name={x.name}
            text={x.text}
            likes={x.likes}
            dislikes={x.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.getElementById('app'));
