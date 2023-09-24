import React from "react";

const Message = ({imageUrl, messageContent, isCustomer}) => {
    return (
    <div className={`message ${isCustomer ? 'message-customer' : ''}`}>
        <img src={imageUrl} alt="message sender" width={40} height={40} />
        <div className="message-content">{messageContent}</div>
    </div>
    )
}

export default Message