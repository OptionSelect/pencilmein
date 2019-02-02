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
<<<<<<< HEAD
=======
          <DateEvent dateEvents={this.state.dateEvents} />
>>>>>>> 5d7f61552a0f6d631cb7603f2d5240f9523e8591
        </div>
      </div>
    );
  }
}

export default App;
