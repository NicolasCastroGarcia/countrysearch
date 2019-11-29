import React, { Component } from "react";
import { Wrapper, Card, Title, Info, FlagImg } from "./style";

class Flag extends Component {
  render() {
    const { flag, name, population, region, capital } = this.props.data;
    const toSpanish =
      region == "Europe" ? "Europa" : region == "Americas" ? "America" : region;
    return (
      <Card>
        <FlagImg background={flag}></FlagImg>
        <Title>
          <p>{name}</p>
        </Title>
        <Info>{`Population: ${population.toLocaleString("fullwide")}`}</Info>
        <Info>{`Región: ${toSpanish}`}</Info>
        <Info>{`Capital: ${capital}`}</Info>
      </Card>
    );
  }
}

export default Flag;
