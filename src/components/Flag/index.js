import React, { Component } from "react";
import { Card, Title, Info, FlagImg, Sar } from "./style";
class Flag extends Component {
  render() {
    const { flag, name, population, region, capital } = this.props.data;
    const toSpanish =
      region == "Europe" ? "Europa" : region == "Americas" ? "America" : region;
    const url = `/country/${name}`;
    return (
      <Card>
        <Sar to={url}>
          <FlagImg background={flag}></FlagImg>
          <Title>
            <p>{name}</p>
          </Title>
          <Info>{`Population: ${population.toLocaleString("fullwide")}`}</Info>
          <Info>{`Región: ${toSpanish}`}</Info>
          <Info>{`Capital: ${capital}`}</Info>
        </Sar>
      </Card>
    );
  }
}

export default Flag;
