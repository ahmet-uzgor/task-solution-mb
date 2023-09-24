import './App.css';
import { useEffect, useRef, useState } from 'react';
import Message from './components/Message';
import MessageInput from './components/MessageInput';

function App() {
  const [messages, setMessages]=useState([{user: 'bot', message: 'Hi, I am echobot!'}])
  const [widgetOpen, setWidgetOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const scrollableRef = useRef()
  const scrollToBottom = () => {
    const scrollContainer = scrollableRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="App">
      <div className="container">
        {widgetOpen ? (    
          <div className='widget-wrapper'>
            <div className='widget-top'>
              <div className='widget-heading'>
              <img src="chatbot-logo.svg" alt="chatbot logo" width={50} height={50} />
              <span>Live Support</span>
              </div>
              <button onClick={() => setWidgetOpen(false)}>x</button>
            </div>
            <div className='widget-messages' ref={scrollableRef}>
              {messages.map((msg, id) => <Message key={id} messageContent={msg.message} imageUrl={msg.user==='bot'?'chatbot-logo.svg' : 'person.svg' } isCustomer={msg.user!=='bot'} />)}
              {isLoading && <Message messageContent="..." imageUrl='chatbot-logo.svg' />}

            </div>  
            <MessageInput setMessages={setMessages} setIsLoading={setIsLoading}/>
          </div>
          ) : 
          <button onClick={() => setWidgetOpen(prev => !prev)}>Live Support</button>
        }
      </div>
    </div>
  );
}

export default App;
