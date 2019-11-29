import React from "react";
import Navbar from "./components/NavBar";
import Flags from "./components/Flags";
import GlobalStyle from "./Themes/globalStyle";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from "./Themes/themes";

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
          <GlobalStyle />
          <Navbar callback={data => this.handleCallback(data)} />
          <Flags />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
