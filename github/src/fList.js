import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Followers from './Followers';

  
class FList extends React.Component {
    state = {
    fData: [],
    };

    componentDidMount() {
    
      axios
        .get(`https://api.github.com/users/tetondan/followers`)
        .then(response => {
          this.setState({
          fData: response.data
    });
        //  console.log(this.state.fData)

    });
  
     
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