import React, { useState, useEffect } from "react";
import FilteredFriendList from "./components/filteredFriendList";
import SearchBox from "./components/searchBox";

const FriendsApp = () => {
  const [searchText, setSearchText] = useState("");
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log("fetch effect");
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(json => {
        setFriends(json.results);
      });
  }, []);

  const filterChange = text => 
    setSearchText(text.toLowerCase());

  const updatedList = friends.filter(friend => {
    const friendName = friend.name.last.toLowerCase();
    return friendName.search(searchText) !== -1;
  });
  return (
    <>
      <h1>Friends List</h1>
      <SearchBox handleChange={filterChange } />
      <FilteredFriendList list={updatedList} />
    </>
  );
};

export default FriendsApp;
