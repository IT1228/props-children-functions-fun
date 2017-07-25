import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout';
import Parent from './ParentComponent';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <BaseLayout>
         <Parent /> 
        </BaseLayout>
      </div>
    );
  }
}  
export default App;