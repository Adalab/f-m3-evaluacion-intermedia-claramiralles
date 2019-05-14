import React from 'react';
import Card from './Card';

function ListCards(props) {
  console.log(props)
  return (
    <div>
      <h1 className="Card__name">Mi lista de pokemon</h1>
      <Card  pokemon= {pokemon:[{pokemon.name}]}/>
      </div>
  );
}

export default ListCards;


// colors={data.colors}



//Tengo un objeto que es un array con objetos

// const person = {
//   name: 'Marie',
//   lastName: 'Smith',
//   age: 39,
//   languages: ['English', 'French']
//   };
  
//   const {languages} = person;
//   const [, secondLanguage] = languages;
  
//   = const {languages: [, secondLanguage]} = person;