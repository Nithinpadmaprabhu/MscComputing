import React, { useState, useEffect } from "react";
import FilteredFriendList from "./components/filteredFriendList";
import './style.css'

const FriendsApp = () => {
  const [searchText, setSearchText] = useState("");
  const [friends, setFriends] = useState([]);
  const [reset, setReset] = useState(true)
  useEffect(() => {
    console.log('fetch effect')
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(json => {
        setFriends(json.results);
      });
  }, [reset]);
  
  const filterChange = event => {
    event.preventDefault();
    setSearchText(event.target.value.toLowerCase());
  };

  const updatedList = friends.filter(friend => {
    const friendName = friend.name.last.toLowerCase();
    return friendName.search(searchText) !== -1;
  });
  useEffect(() => {
    console.log('set title effect')
    document.title = `${updatedList.length} matches`
  }, [updatedList.length]);
  console.log("Render FriendsApp");
  return (
    <>
      <h1>Friends List</h1>
      <input type="text" placeholder="Search" onChange={filterChange} />
      <button onClick={(event) => setReset(!reset) } >Reset</button>
      <FilteredFriendList list={updatedList} />
    </>
  );
};

export default FriendsApp;
