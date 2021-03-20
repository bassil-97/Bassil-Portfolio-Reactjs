import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import logo from '../../Assets/blog-logo.png';
import me from '../../Assets/imgbg.jpg';
import wrapperBg from '../../Assets/wavebg.svg';

import './contact.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#1B191A'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: 'Raleway'
  },
  closeIcon: {
    position: 'absolute',
    left: '10px',
    top: 0
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  circle: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '2px solid #B05DCE'
  },
  socialIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    '& > *': {
      marginRight: theme.spacing(1),
    },
    '&:hover': {
        cursor: 'pointer'
    }
  },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarColor, setSnackbarColor] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [userMsg, setUserMsg] = useState();

  function sendToSocialAccount(platform) {
      switch(platform) {
        case 'facebook':
            window.open(
                'https://www.facebook.com/profile.php?id=100004515360178',
                '_blank' 
            )
            break;
        case 'twitter':
            window.open(
                'https://twitter.com/Bassil_Qadi',
                '_blank' 
            )
            break;
        case 'instagram':
            window.open(
                'https://www.instagram.com/bassil_qadi/',
                '_blank' 
            )
            break;
        case 'github':
            window.open(
                'https://github.com/bassil-97/',
                '_blank' 
            )
      }
  }

  const sendClientMsg = (firstName, lastName, email, message) => {
    if(!firstName || !lastName || !email || !message) {
        setSnackbarMsg("Please fill all your information");
        setSnackbarColor("error");
        setOpen(true);
    } else {
        setSnackbarMsg("Message was sent successfully");
        setSnackbarColor("success");
        setOpen(true);
    }
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Dialog fullScreen open={props.open} onClose={props.close} TransitionComponent={Transition}>
        <div className="wrapper">
            <IconButton className={classes.closeIcon} edge="start" color="inherit" onClick={props.close} aria-label="close">
              <CloseIcon />
            </IconButton>
            <img src={me} className={classes.circle} alt="BA" />
            <div data-aos="zoom-in">
                <h3 className="mt-4 mb-2">Bassil Haitham Alqadi</h3>
                <div className="row mb-4">
                    <small className="w-100 text-center">Web Developer | UI Designer</small>
                </div>
            </div>
            <div className="row w-100 mt-4 px-4">
                <div className="col-lg-6">
                    <div className="contact-item">
                        <small className="text-muted mb-2">EMAIL</small>
                        <h6>bassilalqadi65@gmail.com</h6>
                    </div>
                    <div className="contact-item">
                        <small className="text-muted mb-2">PHONE</small>
                        <h6>+962791858735</h6>
                    </div>
                    <div className="contact-item">
                        <small className="text-muted mb-2">ADDRESS</small>
                        <h6>Jordan - Mafraq</h6>
                    </div>
                    <small className="text-muted mb-2">Social Media</small>
                    <div className={classes.socialIcons}>
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" onClick={()=>sendToSocialAccount('twitter')}/>
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" onClick={()=>sendToSocialAccount('facebook')}/>
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" onClick={()=>sendToSocialAccount('instagram')}/>
                        <img src="https://img.icons8.com/fluent/30/000000/github.png" onClick={()=>sendToSocialAccount('github')}/>
                    </div>
                    
                </div>
                <div className="col-lg-6">
                    <div className="contact-form">
                        <FormGroup className="w-100">
                            <FormControl className="mb-4 w-100">
                                <InputLabel className="text-muted" htmlFor="firstName">First Name</InputLabel>
                                <Input className="text-muted" id="firstName" aria-describedby="my-helper-text" onChange={(e)=>setFirstName(e.target.value)}/>
                            </FormControl>
                            <FormControl className="mb-4 w-100">
                                <InputLabel className="text-muted" htmlFor="lastName">Last Name</InputLabel>
                                <Input className="text-muted" id="lastName" aria-describedby="my-helper-text" onChange={(e)=>setLastName(e.target.value)}/>
                            </FormControl>
                            <FormControl className="mb-4 w-100">
                                <InputLabel className="text-muted" htmlFor="email">Email</InputLabel>
                                <Input className="text-muted" id="email" aria-describedby="my-helper-text" onChange={(e)=>setEmail(e.target.value)}/>
                            </FormControl>
                            <TextareaAutosize className="message-textarea mb-4" aria-label="empty textarea" rowsMin={5} placeholder="Message" onChange={(e)=>setUserMsg(e.target.value)}/>
                            <Button 
                                variant="contained" 
                                style={{backgroundColor: '#B05DCE', 
                                        color: 'white',
                                        width: '100px'
                                    }}
                                onClick={()=>sendClientMsg(firstName, lastName, email, userMsg)}
                            >Send</Button>
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>
      </Dialog>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbarColor}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}
