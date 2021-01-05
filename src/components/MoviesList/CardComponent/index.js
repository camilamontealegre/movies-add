import React from 'react';

import {ReactComponent as StarComponent} from '../../../assets/star.svg';
import {ReactComponent as PencilComponent} from '../../../assets/pencil.svg';
import {ReactComponent as DeleteComponent} from '../../../assets/delete.svg';
import './Card.css';

function Card({ data }) {  
    return (
        <div className="main">
          <h3>{data.name}</h3>
          {/* Acá el .name viene del estado*/}
          <p>{data.comments}</p>
          {/* Acá el .comments viene del estado*/}
          { [1, 2, 3, 4, 5].map((star) => ( <StarComponent className={star <= data.stars ? "yellow" : "gray" } />))} 
            <PencilComponent className="pencil_icon"/>
            <DeleteComponent className="delete_icon"/>
        </div>
    )
}


//high order component:
//con el el mapstatetoprops le ayuda a conectarse a este componente con el store
export default Card;

