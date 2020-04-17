import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(8),
    textAlign: "center",
    background: "#9ceef9",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h5">Contact With Us.</Typography>
          <div>
            <ul className="socialbox">
              <li>
                <Link color="inherit" href="https://facebook.com/with.rain79/" target="_blank">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link color="inherit" href="https://twitter.com/RSRUSSELL6" target="_blank">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link color="inherit" href="https://www.linkedin.com/in/rs-russell/" target="_blank">
                  <LinkedInIcon />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
}
