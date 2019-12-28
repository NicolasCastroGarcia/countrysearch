import React, { Component } from "react";
import Button from "../Button";
import BorderCountries from "../BorderCountries";
import { FlagImg, Wrapper, Card, Info, Title, BorderLink } from "./style";
import { LazyLoadComponent } from "react-lazy-load-image-component";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, borders: null, current: null };
  }

  componentDidUpdate(nextProps) {
    if (this.state.current !== this.props.match.params.name) {
      this.setState({
        current: this.props.match.params.name
      });
      this.getData(this.props.match.params.name);
      document.title = this.props.match.params.name;
    }
  }

  async componentDidMount() {
    const name = this.props.match.params.name;
    document.title = name;
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
      this.state.borders == null ? "LOADING" : "This country has no borders";

    return (
      <Wrapper>
        <Button />

        {this.state.data ? (
          <Info>
            <LazyLoadComponent>
              <FlagImg background={this.state.data.flag}></FlagImg>
            </LazyLoadComponent>
            <Card>
              <Title>{`${this.state.data.name}`}</Title>
              <p>
                <strong>Nombre Nativo:</strong>{" "}
                {`${this.state.data.nativeName}`}
              </p>
              <p>
                <strong>Population:</strong> {`${this.state.data.population}`}
              </p>
              <p>
                <strong>Region:</strong> {`${this.state.data.region}`}
              </p>
              <p>
                <strong>Sub Region:</strong> {`${this.state.data.subregion}`}
              </p>
              <p>
                <strong>Capital:</strong> {`${this.state.data.capital}`}
              </p>
              <div>
                <p>
                  <strong>Borders</strong> <br />{" "}
                </p>
                {this.state.borders.length !== 0
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
          <Info loading={"loading"}>LOADING</Info>
        )}
      </Wrapper>
    );
  }
}

export default Detail;
