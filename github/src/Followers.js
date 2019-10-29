import React from 'react';
import ReactDOM from 'react-dom';

function Followers(props) {
    // everything inside here is considered inside render
    return (
        <div>
          <img src={props.fData.avatar_url} alt="profile" ></img>
          <h2>Login: {props.fData.login}</h2>
          <h3>URL: {props.fData.url}</h3> 
          <h3>Followers: {props.fData.followers}</h3>    
          <h3>Following: {props.fData.following}</h3>         
        </div>
        )};

export default Followers;