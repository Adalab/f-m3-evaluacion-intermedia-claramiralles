import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokemon.scss";

class Pokemon extends Component {
  render() {
    const { id, name, types, url } = this.props;
    return (
      <div className="card">
        <h2 className="card__title">{name}</h2>
        <img className="card__image" src={url} alt={name} />
        <ol key={id}>
          {types.map((type, number) => {
            return (
              <p className="card--type" key={number}>
                {type}
              </p>
            );
          })}
        </ol>
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string
};

export default Pokemon;
