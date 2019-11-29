import React, { Component } from "react";
import { Wrapper, Filters, Cards } from "./style";
import Flag from "../Flag";
import Search from "../Search";
import Selector from "../Selector";

class Flags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      filter: null,
      search: null
    };
  }
  async componentDidMount() {
    const request = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;region;population"
    );
    const data = await request.json();
    this.setState({
      countries: data
    });
  }

  handleCallBack(data, origin) {
    let filter = origin == "selector" ? data : "";
    let search = origin == "search" ? data : "";
    this.setState({
      filter,
      search
    });
  }

  handleSearch(name) {
    const result =
      this.state.search &&
      name.toLowerCase().search(this.state.search.toLowerCase()) != -1;

    return result;
  }

  render() {
    return (
      <Wrapper>
        <Filters>
          <Search
            callback={(data, origin) => this.handleCallBack(data, origin)}
          />
          <Selector
            callback={(data, origin) => this.handleCallBack(data, origin)}
          />
        </Filters>
        <Cards>
          {this.state.countries != null ? (
            this.state.countries.map((e, key) => {
              const region = e.region;
              const toSpanish =
                region == "Europe"
                  ? "Europa"
                  : region == "Americas"
                  ? "America"
                  : region;
              if (toSpanish == this.state.filter && this.state.filter) {
                return <Flag data={e} key={key} />;
              } else if (this.handleSearch(e.name)) {
                return <Flag data={e} key={key} />;
              } else if (
                (!this.state.filter || this.state.filter == "Filtrar") &&
                !this.state.search
              ) {
                return <Flag data={e} key={key} />;
              }
            })
          ) : (
            <div>CARGANDO</div>
          )}
        </Cards>
      </Wrapper>
    );
  }
}

export default Flags;
