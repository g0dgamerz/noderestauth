import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Main from './components/Main';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  
})
);

function App() {


  const classes = useStyles();

  return (
    <div className="App">
       <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Simple Todo list
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              todos
            </Link>
     
          </nav>
          <Button href="/login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
          <Button href="/register" color="primary" variant="outlined" className={classes.link}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
        <img src={logo} className="App-logo" alt="logo" />
       
          <Main />      
      
  
        
        
      
        </div>
       
  );
}

export default App;
