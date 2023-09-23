import React, {useState} from 'react'
import Widget from './index';
import './style.css'

const WidgetContainer = () =>  {
  const [widgetOpen, setWidgetOpen] = useState(true)
  return (
    <div className="container">
      {widgetOpen ? <Widget setWidgetOpen={setWidgetOpen}/> : <button onClick={() => setWidgetOpen(prev => !prev)}>Canli Destek</button>}
    </div>
  );
}

export default WidgetContainer;
