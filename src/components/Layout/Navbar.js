import React from 'react';
import { Link } from "react-router-dom";
import MyButton from "../../util/MyButton";
// MUI Staff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import '../../App.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

//Icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';

//Link


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <Link color="primary" underlin="hover" href="/">
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Hone" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        
        <Link color="primary" underlin="none" href="https://facebook.com/with.rain79/">
        <ListItem button>
          <ListItemIcon><FacebookIcon /></ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <AppBar position="relative">
          <Toolbar className="nav-container main-nav">
            <Link to="/covid19">
              <MyButton tip="Home">
                <HomeIcon />
              </MyButton>
            </Link>
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}><MyButton tip="Menu"><MenuIcon /></MyButton></Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      ))}
    </div>
  );
}
