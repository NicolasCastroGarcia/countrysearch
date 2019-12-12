import React, { Component } from "react";
import { Countries } from "./style";

class BorderCountries extends Component {
  render() {
    return <Countries>{this.props.name}</Countries>;
  }
}
export default BorderCountries;
