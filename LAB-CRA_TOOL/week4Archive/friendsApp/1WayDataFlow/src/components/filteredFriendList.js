import React from "react";
import Friend from "./friend";

const FilteredFriendList = props => {
  console.log('Render of FilteredFriendList')
  let friends = props.list.map(item => (
    <Friend key={item.email} friend={item} />
  ));
  return <ul>{friends}</ul>;
};

export default FilteredFriendList;
