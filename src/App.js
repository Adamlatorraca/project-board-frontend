import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsContainer from '/containers/ProjectsContainer'

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <ProjectsContainer />
      </div>
    );
  }
  
}

export default App;
