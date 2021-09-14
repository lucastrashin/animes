import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        <Link to="/Lista">Lista</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link to="/">Home</Link>
      </Button>

      <Button variant="contained" color="secondary">
        <Link to="/Pesquisa">Pesquisa</Link>
      </Button>
    </div>
  );
};

export default Menu;
