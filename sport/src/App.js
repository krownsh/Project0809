import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import SearchPage from "./components/SearchPage";

class App extends Component {
  state = {}
  render() {
    return (
        <SearchPage />
    )
  }
}
export default App;
