import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const Menu = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="secondary"></IconButton>

          <Link color="secondary" component={RouterLink} to="/">
            Home
          </Link>

          <Link color="secondary" component={RouterLink} to="/pesquisa">
            Pesquisa
          </Link>

          <Link color="secondary" component={RouterLink} to="/lista">
            Lista
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;
