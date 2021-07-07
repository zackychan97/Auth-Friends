import React from "react";
import { Container, Button, TextField } from "@material-ui/core";

const AddFriends = props => {
  return (
    <Container maxWidth="md" className="add-friends-container">
      <form onSubmit={props.handleAddFriend}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="text"
          placeholder="Name..."
          name="name"
          onChange={props.handleChange}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="number"
          placeholder="Age..."
          name="age"
          onChange={props.handleChange}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="email"
          placeholder="Email@email.com..."
          email={props.email}
          name="email"
          onChange={props.handleChange}
        />
        <Button type="submit" variant="contained" fullWidth color="primary">
          Add Friend
        </Button>
      </form>
    </Container>
  );
};

export default AddFriends;