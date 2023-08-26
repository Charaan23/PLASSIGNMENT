import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-3xl p-10">
        <Tooltip
          target="tooltip-button"
          position="top"
          style={{
            text: "background-color: #3490dc; color: #fff; padding: 3px;",
            tooltip: "background-color: #3490dc; color: #fff; padding: 3px; border-radius: 3px; width: 3rem;",
            arrow: "border-bottom-color: #3490dc; border-width: 3px;",
          }}
          text="I am tooltip"
          image="public\logo192.png" 
        >
          <button id="tooltip-button" className="btn">
            Show Me Tooltip
          </button>
        </Tooltip>

        <div className="py-10">
          <Tooltip
            target="bold-button"
            position="top"
            style={{
              text: "background-color: #3490dc; color: #fff; padding: 3px;",
              tooltip: "background-color: #3490dc; color: #fff; padding: 3px; border-radius: 3px; width: 3rem;",
              arrow: "border-bottom-color: #3490dc; border-width: 3px;",
            }}
            text="Bold"
          >
            <button id="bold-button" className="btn">
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
