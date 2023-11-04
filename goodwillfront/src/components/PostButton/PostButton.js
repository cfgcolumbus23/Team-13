import React, { useState } from 'react';

function PostButton() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const handleMessageChange = (e) => setMessage(e.target.value);

    const postMessage = () => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage(''); // Clear the input after posting
            closePopup();
            //call another service or send the message array to an API or backend
        }
    };

    return (
        <div>
            <button onClick={openPopup}>Post a Message</button>
            {isPopupOpen && (
                <div className="popup">
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Type your message here..."
                    />
                    <button onClick={postMessage}>Post</button>
                    <button onClick={closePopup}>Cancel</button>
                </div>
            )}
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
        </div>
    );
}

export default PostButton;
