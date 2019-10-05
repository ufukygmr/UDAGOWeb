import React from 'react';

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './components/homePage';
import './App.css';
import './assets/css/all.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/templatemo-style.css'; 
// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class App extends React.Component{
  render (){
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

export default App;
