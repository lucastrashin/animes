import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        <Link to="/Lista">Lista</Link>
      </Button>
    </div>
  );
};

export default Home;
