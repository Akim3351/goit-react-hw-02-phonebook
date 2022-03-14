import React, { Component } from "react";
import shortid from "shortid";
import propTypes from "prop-types";
import css from "./Filter.module.css";

class Filter extends Component {
  render() {
    return (
      <label className={css.search__label}>
        Find contacts by name
        <input
          onChange={this.props.onSearch}
          type="text"
          value={this.props.filter}
          // id={this.inputFilterId}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: propTypes.string,
  onSearch: propTypes.func,
};

export default Filter;