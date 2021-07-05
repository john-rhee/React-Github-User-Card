import React from 'react';
import ReactDOM from 'react-dom';

function Followers(props) {
    // everything inside here is considered inside render 
    console.log(props)
   return(
     <div>
      {props.fData.map((follow) => {
       return (
        <div>
          <img src={follow.avatar_url} alt="profile" ></img>
          <h2>Login: {follow.login}</h2>
          <h3>URL: {follow.url}</h3> 
          <h3>Followers: {follow.followers}</h3>    
          <h3>Following: {follow.following}</h3>         
        </div>
       )
      })}
    </div>      
    )

     };

export default Followers;