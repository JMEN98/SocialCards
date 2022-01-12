import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {
  const [user, SetUser] = useState([]);
  const [alluser, setAllUser] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=28");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUser(userData);
      SetUser(userData);
    })();
  }, []);
  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = alluser.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    SetUser(filteredUsers);
  }

  return (
    <div className="App">
      <header> Jeff Social Cards</header>
      <input
        className="search"
        placeholder="search..."
        onInput={filterCards}
      ></input>
      <div className="cards-container">
        {user.map((user, index) => (
          <SocialCard userData={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
