import React, { Component } from "react";
import { Input, Wrapper, SearchBar } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  handleChange(e) {
    this.props.callback(e.target.value, "search");
  }
  render() {
    return (
      <Wrapper>
        <SearchBar>
          <FontAwesomeIcon icon={faSearch} style={{ paddingLeft: "1em" }} />
          <Input
            onChange={e => this.handleChange(e)}
            placeholder="Busca un país..."
          ></Input>
        </SearchBar>
      </Wrapper>
    );
  }
}

export default Search;
