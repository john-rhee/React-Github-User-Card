import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Followers from './Followers';

const followers= [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
  ];
  

class FList extends React.Component {
    state = {
    fData: [],
    };

    componentDidMount() {
    let i = 0;
    followers.forEach((p, i) => {
      axios
        .get(`https://api.github.com/users/${followers[i]}`)
        .then(response => {
          this.setState({
          fData: response.data
    });
        i++;
    });
        })
        
    };
  
  render() {  
    return (
      <div>
          <Followers fData={this.state.fData} />
      </div>
      );
    };
  }

export default FList;