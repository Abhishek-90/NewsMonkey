import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {

  let [mode,setMode] = useState('light');
  let [progress,setProgress] = useState(0);

  let toggleDarkMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#4e4c4c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} handleToggle={toggleDarkMode}/> 
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general" mode={mode}/></Route> 
          <Route exact path="/business"><News setProgress={setProgress}  key="business" pageSize={6} country="in" category="business"  mode={mode}/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={6} country="in" category="entertainment" mode={mode}/></Route> 
          <Route exact path="/general"><News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general" mode={mode}/></Route> 
          <Route exact path="/health"><News setProgress={setProgress}  key="health" pageSize={6} country="in" category="health" mode={mode}/></Route> 
          <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={6} country="in" category="science" mode={mode}/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress}  key="sports" pageSize={6} country="in" category="sports" mode={mode}/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pageSize={6} country="in" category="technology" mode={mode}/></Route> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
