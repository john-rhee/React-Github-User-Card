import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
    // everything inside here is considered inside render
    return (
        <div>
          <img src={props.myData.avatar_url} alt="profile" ></img>
          <h2>Login: {props.myData.login}</h2>
          <h3>URL: {props.myData.url}</h3> 
          <h3>Followers: {props.myData.followers}</h3>    
          <h3>Following: {props.myData.following}</h3>         
        </div>
        )};

export default List;