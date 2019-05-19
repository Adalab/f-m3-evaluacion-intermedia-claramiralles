import React, {Component} from 'react';
import './Pokemon.scss'

class Pokemon extends Component {
  render (){ 
    const {id, name, types, url}= this.props
      return (

        <div className="card">
        <h2 className="card__title">{name}</h2>
          <img 
            className="card__image"
            src={url} 
            alt={name}
          />
           <ol key={id}>
            {types.map((type, number) => {
              return (
                <p 
                className="card--type"
                key={number}>
                  {type}
                </p>
              )
            })}
          </ol>
          </div>
      )
  }
}

export default Pokemon;

