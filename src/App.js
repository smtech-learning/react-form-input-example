import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stack1 from './Components/Stack1';
import 'bootstrap/dist/css/bootstrap.css';
import CustomForm from './Components/CustomForm';
import TableRender from './Components/TableRender';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        This is Stack 1
        <CustomForm />
        </header>
        <Stack1 val='App-header2' val1 ='This is Stack 2' />
        <Stack1 val='App-header3' val1 = 'This is Stack 3'/>
        </div>
    );
  }
}

export default App;
