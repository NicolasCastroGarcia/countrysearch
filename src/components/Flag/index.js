import React, { Component } from "react";
import { Card, Title, Info, FlagImg, Sar } from "./style";
import { LazyLoadComponent } from "react-lazy-load-image-component";
class Flag extends Component {
  render() {
    const { flag, name, population, region, capital } = this.props.data;
    const url = `/country/${name}`;
    return (
      <Card>
        <Sar to={url}>
          <LazyLoadComponent>
            <FlagImg background={flag}></FlagImg>
          </LazyLoadComponent>
          <Title>
            <p>{name}</p>
          </Title>
          <Info>{`Population: ${population.toLocaleString("fullwide")}`}</Info>
          <Info>{`Region: ${region}`}</Info>
          <Info>{`Capital: ${capital}`}</Info>
        </Sar>
      </Card>
    );
  }
}

export default Flag;
