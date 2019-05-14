import React from 'react';

function Card(props) {
  const { pokemon } = props;
  return (
    <li className="Card">
      <img className = "Card_image" src="{pokemon.url}" alt="pokemon"/>
      <h2 className="Card__name">{pokemon.name}</h2>
      {/* <Image  />
      <Name />
      <Type  />
     */}
    </li>
  );
}

export default Card;

