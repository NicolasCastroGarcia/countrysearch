import React, { Component } from "react";
import { DropDown, Wrapper, SearchBar } from "./style";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        "Filter",
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
        "Polar"
      ],
      target: "Filter"
    };
  }

  handleChange(e) {
    this.setState({
      target: e.target.value
    });
    this.props.callback(e.target.value, "selector");
  }

  render() {
    const { options } = this.state;

    return (
      <Wrapper>
        <SearchBar>
          <DropDown onChange={e => this.handleChange(e)}>
            {options.map((e, key) => {
              return (
                <option value={e} key={key}>
                  {e}
                </option>
              );
            })}
          </DropDown>
        </SearchBar>
      </Wrapper>
    );
  }
}

export default Selector;
