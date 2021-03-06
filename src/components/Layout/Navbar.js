import React from 'react';
import { Link } from "react-router-dom";
import MyButton from "../../util/MyButton";
import '../../App.css';
// MUI Staff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MaterialLink from "@material-ui/core/Link";

//Icon
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';


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

        <MaterialLink underline="none" color="primary" underlin="hover" href="/covid19">
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </MaterialLink>
      </List>
      <Divider />
      <List>

        <MaterialLink underline="none" color="inherit" href="https://facebook.com/with.rain79/" target="_blank">
          <ListItem>
            <ListItemIcon><FacebookIcon /></ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
        </MaterialLink>

        <MaterialLink underline="none" color="inherit" href="https://twitter.com/RSRUSSELL6" target="_blank">
          <ListItem button>
            <ListItemIcon><TwitterIcon /></ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
        </MaterialLink>

        <MaterialLink underline="none" color="inherit" href="https://www.linkedin.com/in/rs-russell/" target="_blank">
          <ListItem button>
            <ListItemIcon><LinkedInIcon /></ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
        </MaterialLink>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="nav-container main-nav">
          <Link to="/covid19">
            <MyButton tip="Home">
              <HomeIcon />
            </MyButton>
          </Link>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <MyButton onClick={toggleDrawer(anchor, true)} tip="Menu"><MenuIcon /></MyButton>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
