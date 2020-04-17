import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import themeObject from "../src/util/theme";
const theme = createMuiTheme(themeObject);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="covid-19-app">
          <Router>
            <Navbar />
            <CssBaseline />
            <Container maxWidth="lg">
              <Switch>
                <Route exact path="/covid19" component={Home} />
              </Switch>
            </Container>
            <Footer />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;