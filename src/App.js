
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';


class App extends Component{
  render() {
    return (
      <Map google={this.props.google} zoom={12} initialCenter={{lat: 40.78, lng: -73.97}}/>
    );
  }
}export default GoogleApiWrapper({
  apiKey: 'AIzaSyDE_CZbHCVVapxbJ92-Rui0bIl13Yhafx0'
})(App);