//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {
  //c="Pushkar";  can be used using {this.c} acts as class variable
  pagesize=15;
  apikey=process.env.REACT_APP_NEWS_API
  
  state={
    progress:0
  }
  Setprogress=(progress)=>{
    this.setState({progress:progress})

  }
  render() {
    return (
      
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={5}
        
      />
      <Switch>
          <Route exact path="/">
           <News key="general" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="general"/>
          </Route>
          <Route exact path="/general">
             <News key="general" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="general"/>
          </Route>
          <Route exact path="/business">
            <News key="business" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="business"/>
          </Route>
          <Route exact path="/science">
            <News key="science" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="science"/>
          </Route>
          <Route exact path="/technology">
            <News key="technology" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="technology"/>
          </Route>
          <Route exact path="/sports">
            <News key="sports" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="sports"/>
          </Route>
          <Route exact path="/health">
            <News key="health" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="health"/>
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" apikey={this.apikey} Setprogress={this.Setprogress} pagesize={this.pagesize} country="in" category="entertainment"/>
          </Route>
        </Switch>
      </Router>
    </div>

    
    
    )
  }
}





