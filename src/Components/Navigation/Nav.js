import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#BEDA67",
        }}
      >
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="lg" height="40" />
          </Typography>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/addEvent">Add New Event</Link></Button>
          <Button color="inherit"><Link to="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
