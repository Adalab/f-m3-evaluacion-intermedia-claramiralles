import React, { Component } from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "./Pokelist.scss";

class Pokelist extends Component {
  render() {
    const { data, favstate, action } = this.props;
    return (
      <ul className="pokemon__list">
        {data.map(item => {
          return (
            <li key={item.id} className="pokemon__item">
              <Pokemon
                id={item.id}
                name={item.name}
                types={item.types}
                url={item.url}
                action={action}
                favstate={favstate}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

Pokelist.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func,
  favstate: PropTypes.number,
};

export default Pokelist;
