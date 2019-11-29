import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Title, Wrapper, Text, ThemeChanger } from "./style";
import { withTheme } from "styled-components";

class Navbar extends Component {
  handleClick() {
    this.props.callback(true);
  }

  render() {
    return (
      <Wrapper>
        <Title>Buscador de Paises</Title>
        <ThemeChanger onClick={() => this.handleClick()}>
          <FontAwesomeIcon
            icon={this.props.theme.type == "dark" ? faMoon : faSun}
            style={{ paddingRight: "0.5em" }}
          />
          <Text>{this.props.theme.type == "dark" ? "Dark" : "Light"}</Text>
        </ThemeChanger>
      </Wrapper>
    );
  }
}

export default withTheme(Navbar);
