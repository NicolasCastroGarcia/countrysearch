import React, { Component } from "react";
import { BackButton, Back } from "./style";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends Component {
  render() {
    return (
      <Back to={"/"}>
        <BackButton>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ paddingRight: "0.5em" }}
          />
          Back
        </BackButton>
      </Back>
    );
  }
}

export default Button;
