import React, { useEffect, useRef, useState } from 'react'
import Message from '../Message';
import MessageInput from '../MessageInput';

const Widget = ({setWidgetOpen}) =>  {
  const [messages, setMessages]=useState([{user: 'bot', message: 'Hi, I am echobot!'}])
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
  );
}

export default Widget;
