import React from 'react'

const Widget = ({setWidgetOpen}) =>  {
  return (
    <div className='widget-wrapper'>
      <div className='widget-top'>
        <span> Logo</span> 
        <span>Canli Destek</span>
        <button onClick={() => setWidgetOpen(false)}>x</button>
      </div>
   
    </div>
  );
}

export default Widget;
