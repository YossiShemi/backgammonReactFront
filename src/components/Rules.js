import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
  rules:{
    textAlign:'center',
    color:'red'
  },
  link:{
   textDecoration:'none',
   textAlign:'center',
   fontWeight:'bold',
   padding:'5px',
   color:'black',
   '&:hover': {color:'red'},
   '&:visited': {color:'black'},
   '&:active': {color:'black'}
  },
  img:{
    width:'70%',
    height:'70%',
    borderRadius:'50%',
    margin:'auto'
  },
  agree:{
    fontWeight:'bold',
    color:'white',
    border:'#f4f4f4 2px solid',
    padding:'5px',
    backgroundColor:"#ccc",

  }
}));



export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const classes = useStyles();
    return (
      <div>

        <a onClick={handleClickOpen}>Rules</a>
      
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <h2 className={classes.rules}>Rules !</h2> 

          <DialogContent>
          <a href="https://en.wikipedia.org/wiki/Backgammon"  target="_blank" className={classes.link} > Click here to go to backgamon rules on Wikipedia, I'm lazy :)</a>
          </DialogContent>

          <img src={require('../images/rules.gif')} className={classes.img}/>

          <DialogActions>
            <Button onClick={handleClose} >
              <div className={classes.agree}>
                Agree
              </div>
            </Button>
          </DialogActions>

        </Dialog>

      </div>
    );
}
