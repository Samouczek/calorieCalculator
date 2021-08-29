import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import "./scss/main.scss";
import {FirebaseContext} from "./components/Firebase";
import Firebase from "./components/Firebase/Firebase";

ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase()}>
            <App />
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);