import React, { Component } from 'react';
import DateHeader from './Components/DateHeader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: ['February 2nd, 2019', 'February 3rd, 2019', 'February 5th, 2019'],
      events: []
    }
  }
  
  render() {
    return (
      <div>
        <nav class="navbar sticky-top navbar-dark bg-dark mb-5">
        <span class="navbar-brand">
            <span class="ml-1">I'm In</span>
        </span>
        </nav>
        <div>
          <DateHeader dateHeaders={this.state.dates} />
          <DateEvent dateEvents={this.state.dateEvents} />
        </div>
      </div>
    );
  }
}

export default App;
