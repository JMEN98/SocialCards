import { useState,useEffect } from 'react';
import './App.css';
import SocialCard from './SocialCard';

function App() {
    const [user,SetUser]=useState([])

    useEffect (()=>{
     (async()=>{
       let userData;
       try{
         const response = await fetch("https://randomuser.me/api/?results=10")
           userData =(await response.json()).results
       } catch (error){
          console.log(error)
          userData=[];
       }
       SetUser(userData)
     }) ()

    },[])

  return (
    <div className="App">
     {user.map((user,index)=>(
       <SocialCard userData={user} key={index}/>

  
     ))}
     
    </div>
  );
}

export default App;
