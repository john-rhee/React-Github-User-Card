import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import List from './List';
import FList from './fList';

class App extends React.Component {
  state = {
    myData: [],
    fData:[]
  };
  componentDidMount() {
    axios
      .get('https://api.github.com/users/john-rhee')
      .then(response => {
        console.log(response);
        this.setState({
          myData: response.data
        });
      })
      .catch(error => console.log(error));
  };

render() {  
  return (
    <div>
      <h1>Github-User-Card</h1>
       <List myData={this.state.myData} />
       <FList />
    </div>
    );
  };
}

export default App;
