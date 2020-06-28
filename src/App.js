import React from 'react';
import NavBar from './NavBar';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding:5  ,
    backgroundColor: 'lightBlue',
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    marginTop:20
  },
  input:{
    width:"98%",
    marginBottom:10
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar/>
      <Paper elevation={3} className={classes.paper}>
        <h2>Login Form</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Enter Email" className={classes.input} />
          <TextField id="standard-basic" label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
  Login
</Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
