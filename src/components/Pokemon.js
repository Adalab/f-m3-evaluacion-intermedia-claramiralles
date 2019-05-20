import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokemon.scss";

class Pokemon extends Component {
  render() {
    const { id, name, types, url, action, favstate } = this.props;
    const clickedFav = `button ${parseInt(favstate) === parseInt(id) ?'button--fav':''}`

    return (
      <div className="card">
        <h2 className="card__title">{name}</h2>
        <img className="card__image" src={url} alt={name} />
        <ol className="card__footer" key={id}>
          {types.map((type, number) => {
            return (
              <p className="card--type" key={number}>
                {type}
              </p>
            );
          })}
        </ol>
        
        <button
          className= {clickedFav}
          id={id}
          data-id={id}
          onClick={action}
          favstate={favstate}
        >Fav!
        </button>
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  action: PropTypes.func,
  favstate: PropTypes.number,
};

export default Pokemon;
