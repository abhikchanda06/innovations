import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:"#082032",
    boxShadow:"none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar=()=>{
    const classes=useStyles();
    return (
        <AppBar className={classes.root}>
           <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SD
          </Typography>
          <Button color="inherit" onClick={e=>{
             document.documentElement.scrollTop = 0;
          }}>Home</Button>
          <Button color="inherit" onClick={e=>{
              window.scrollTo(0,document.body.scrollHeight);
          }}>About</Button>
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;