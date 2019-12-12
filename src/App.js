import React from "react";
import Navbar from "./components/NavBar";
import Flags from "./components/Flags";
import GlobalStyle from "./Themes/globalStyle";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from "./Themes/themes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Detail from "../src/components/Detail";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: true
    };
  }

  handleCallback(data) {
    this.setState({ theme: !this.state.theme });
  }

  render() {
    const { theme } = this.state;
    const color = theme ? dark : light;

    return (
      <React.Fragment>
        <ThemeProvider theme={color}>
          <Router>
            <GlobalStyle />
            <Navbar callback={data => this.handleCallback(data)} />
            <Switch>
              <Route exact path="/" component={Flags} />
              <Route path="/country/:name" component={withRouter(Detail)} />
            </Switch>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
