import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { Box, Container } from "@material-ui/core";
import Friend from "./Friend";
import AddFriends from "./AddFriends";

const FriendList = () => {
  const [friendList, setFriendList] = useState([]);
  const [addFriend, setAddFriend] = useState({});

  useEffect(() => {
    AxiosWithAuth()
      .get("/api/friends")
      .then(response => setFriendList(response.data))
      .catch(error => console.log("Friend List: ", error));
  }, [setFriendList]);

  const handleAddFriend = e => {
    e.preventDefault();
    console.log(addFriend);

    AxiosWithAuth()
      .post("api/friends", addFriend)
      .then(response => {
        console.log(response);
      });
  };

  const handleChange = e => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value
    });

    // console.log(addFriend);
  };

  const deleteFriend = friend => {
    const idToDelete = friend.friend.id;
    console.log(idToDelete);
    AxiosWithAuth()
      .delete(`api/friends/${idToDelete}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="friend-list-container">
      <AddFriends
        handleChange={handleChange}
        handleAddFriend={handleAddFriend}
      />

      <Container maxWidth="md">
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="center"
          justifyContent="space-around"
        >
          {friendList.map(friend => (
            <Friend
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              deleteFriend={() => deleteFriend({ friend })}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default FriendList;