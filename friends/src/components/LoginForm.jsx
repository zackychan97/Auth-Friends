import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { Button, TextField, Box, Container } from "@material-ui/core";

const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    credentials: {
      username: "",
      password: ""
    },
    isLoggedIn: false
  });

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginCredentials({ ...loginCredentials, isLoggedIn: true });
    } else {
      setLoginCredentials({ ...loginCredentials, isLoggedIn: false });
    }
  }, []);

  const handleChange = e => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value
    });
    // console.log(loginCredentials);
  };

  const handleLogIn = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/api/login", loginCredentials)
      .then(response => {
        console.log("RESPONSE: ", response);
        const { data } = response;
        sessionStorage.setItem("token", data.payload);
      })
      .catch(error => console.error("Log In: ", error));
  };

  return (
    <Box display="flex" flexDirection="column" alignContent="center">
      <h1>{loginCredentials.isLoggedIn ? "Logged In" : "Please Log In"}</h1>
      <Container maxWidth="sm">
        <form onSubmit={handleLogIn}>
          <TextField
            required
            autoFocus
            fullWidth
            label="Username..."
            margin="normal"
            variant="outlined"
            type="text"
            name="username"
            placeholder="Username..."
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Password..."
            margin="normal"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChange}
          />
          <Button fullWidth variant="outlined" color="primary" type="submit">
            Log In
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default LoginForm;