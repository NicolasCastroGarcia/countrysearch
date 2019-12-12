import React, { Component } from "react";
import { BackButton, Back } from "./style";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends Component {
  render() {
    return (
      <BackButton>
        <Back to={"/"}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ paddingRight: "0.5em" }}
          />
          Volver
        </Back>
      </BackButton>
    );
  }
}

export default Button;
