import React, { Component } from "react";
import Button from "../Button";
import BorderCountries from "../BorderCountries";
import {
  FlagImg,
  Wrapper,
  Card,
  Info,
  Title,
  BackLink,
  BorderLink
} from "./style";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, borders: null };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.name !== nextProps.match.params.name) {
      this.getData(nextProps.match.params.name);
    }
  }

  async componentDidMount() {
    const name = this.props.match.params.name;
    await this.getData(name);
  }

  async getData(name) {
    const request = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );

    const data = await request.json();

    const borders = await this.findCountry(data[0].borders);

    this.setState({ data: data[0], borders });
  }

  async findCountry(data) {
    const promise = data.map(async e => {
      const request = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${e}?fields=name`
      );
      const response = await request.json();
      const object = { code: e, name: response.name };
      return object;
    });

    return await Promise.all(promise).then(data => {
      return data;
    });
  }

  render() {
    const loading =
      this.state.borders == null ? "CARGANDO" : "Este país no tiene fronteras";

    return (
      <Wrapper>
        <Button />

        {this.state.data ? (
          <Info>
            <FlagImg background={this.state.data.flag}></FlagImg>
            <Card>
              <Title>{`${this.state.data.name}`}</Title>
              <p>
                <strong>Nombre Nativo:</strong>{" "}
                {`${this.state.data.nativeName}`}
              </p>
              <p>
                <strong>Población:</strong> {`${this.state.data.population}`}
              </p>
              <p>
                <strong>Región:</strong> {`${this.state.data.region}`}
              </p>
              <p>
                <strong>Sub Región:</strong> {`${this.state.data.subregion}`}
              </p>
              <p>
                <strong>Capital:</strong> {`${this.state.data.capital}`}
              </p>
              <div>
                <p>
                  <strong>Fronteras</strong> <br />{" "}
                </p>
                {this.state.borders.length != 0
                  ? this.state.borders.map(e => {
                      return (
                        <BorderLink to={`/country/${e.name}`}>
                          <BorderCountries name={e.code} />
                        </BorderLink>
                      );
                    })
                  : loading}
              </div>
            </Card>
          </Info>
        ) : (
          "CARGANDO"
        )}
      </Wrapper>
    );
  }
}

export default Detail;
