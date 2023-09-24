import React, { useState } from 'react'

const MessageInput = ({setMessages, setIsLoading}) =>  {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e)=> {
        setInputValue(e.target.value)
    }

    // submit message to api and get rexponse and show it
    const handleSubmit = async() => {
        if(inputValue){
            setIsLoading(true)
            // To increase interactivity within sending message and getting response ; it delays 0.3sec
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
            await delay(300)

            // handles submit
            setMessages(prev => [...prev, {user: 'customer', message: inputValue}])
            // if you want you can change with your api url
            const echoBotApiUrl = process.env.REACT_APP_ECHO_BOT_API_URL || 'http://localhost:3001';
            const res = await fetch(`${echoBotApiUrl}/echo-message`, {
                method: 'post',
                body: JSON.stringify({message: inputValue}),
                headers: {
                    "Content-type":"application/json",
                    'Access-Control-Allow-Origin': echoBotApiUrl,
                    'Access-Control-Allow-Credentials': 'true'
                }
            }).catch((err) => {
                // it can be logged into services such as sentry or newrelic
                console.log(err);
            })

            const messageResponse= await res.json()
            setIsLoading(false)
            setMessages(prev => [...prev, {user: 'bot', message: messageResponse}])
            setInputValue('')
        }
    }

    // it submit message when enter key pressed , 
    const handleKeyDown = (e) => {
        if(e.which === 13){
            handleSubmit()
        }
    }

  return (
    <div className="input-container">
    <input
        type="text"
        placeholder='Type your message here...'
        className='input'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
    />
    <button onClick={handleSubmit} className='icon-button'>
        <img src="send-arrow.svg" alt='send messgae' width={20} height={20}/>
    </button>
    </div>
  );
}

export default MessageInput;
