import React, {Component} from 'react';
import Pokemon from './Pokemon'
import './Pokelist.scss'

class Pokelist extends Component {
    render(){
        const {data} = this.props;
            return (
                <ul className="pokemon__list">
                    {data.map(item => {
                    return (
                        <li className="pokemon__item" >
                            <Pokemon id={item.id} name={item.name} types={item.types} url={item.url}/>
                        </li> 
                            
                      
                    );
                })}
                </ul>
        )
          
                
      
    }
}

export default Pokelist;