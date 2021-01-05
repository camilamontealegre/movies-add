import React from 'react';
import plus from '../../../src/assets/plus.png';

function Plus({OnNext}){
  return (
      <div>
         <button onClick={OnNext}><img src={plus} className="circle_button"/></button> 
      </div>
  )
}
export default Plus;  