import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  brand: {
    flexGrow: 2
  },
  menu: {
    flexGrow: 3
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.brand}>
            The NewYork Times
          </Typography>
          <Button className={classes.menu} color="inherit">
            <Link style={{ color: "white" }} to="/authors">
              List Author
            </Link>
          </Button>
          <Button className={classes.menu} color="inherit">
            <Link style={{ color: "white" }} to="/posts">
              List Posts
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
