import React, { useState } from 'react';

function ChatBox() {
  const [messageHistory, setMessageHistory] = useState([]);
  const [newMessage, setNewMessage] = useState({ username: '', message: '', receivername: '' });

  const handleSendMessage = () => {
    const message = {
      username: newMessage.username,
      message: newMessage.message,
      receivername: newMessage.receivername, 
      timestamp: new Date().toLocaleString(),
    };

    // post request to insert new message to database
    fetch('http://localhost:5000/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

    // Update the state and clear the input
    setMessageHistory([...messageHistory, message]);
    setNewMessage({ username: '', message: '', receivername: '' });
  }


  // load the posts array with data from the backend once the component mounts
  // useEffect(() => {
  //   fetch('http://localhost:5000/posts')
  //       .then(response => response.json())
  //       .then((postData)=> {setPosts(postData)});
  // }, []);

  
  return (
    <div>
      <h1>Chat Room</h1>
      <ul>
        {messageHistory.map((message, index) => (
          <li key={index}>
            <strong>From: </strong>{message.username}
            <br />
            <strong>To: </strong>{message.receivername}
            <br />
            {message.message}
            <br />
            <small>{message.timestamp}</small>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newMessage.receivername}
          onChange={(e) => setNewMessage({ ...newMessage, receivername: e.target.value })}
          placeholder="receivername"
        />
        <input
          type="text"
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
          placeholder="Your message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import { useState } from 'react';
// import { Route, Routes } from "react-router-dom";

// import { react } from "@babel/types";
// import {
//   ChatContainer,
//   MainContainer,
//   Message,
//   MessageGroup,
//   MessageInput,
//   MessageList,
// } from "@chatscope/chat-ui-kit-react";

// function ChatBox() {
//   // user input data
//   const [userData, setUserData] = useState({username: "", message: "", receiver: ""});
// // all the messages
//   const [messageHistory, setMessageHistory] = useState([{username: "", message: "", receiver: ""}])

 
//   function handleInput(event) {
//     const {value} = event.target;
//     setUserData({...userData, "message": value});
//   }
//   function handleSend(event) {
//     messageHistory.push(userData);
//     setMessageHistory(...messageHistory);

//     fetch('http://localhost:5000/messages', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(responseData => {
//       console.log(responseData);
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
//   }


//   return (
//     <div>
//       <ul>
//   {messageHistory.map((message, index) => (
//     <li key={index}>
//       <strong>Username:</strong> {message.username}
//       <br />
//       <strong>Message:</strong> {message.message}
//       <br />
//       <strong>Receiver:</strong> {message.receiver}
//       <br />
//     </li>
//   ))}
// </ul>


//       <form>
//               <input type="text" onChange={handleInput} placeholder="sample message"></input>
//                 </form>
//                 <button type="submit" className="btn btn-primary btn-block" onClick={handleSend}>Submit</button>
//       {/* <MainContainer>
//         <ChatContainer>
//           <MessageList> 
            
//             {messages.map((content, index)=>{return (<Message model={{sender: content.username, message: content.message}}></Message>)}) }

//           </MessageList>
//           <form>
//               <input type="text" onChange={handleInput} placeholder="sample message"></input>
//                 </form>
//                 <button type="submit" className="btn btn-primary btn-block" onClick={handleSend}>Submit</button>
//         </ChatContainer>
//       </MainContainer> */}
//     </div> 
//   );
// }

// export default ChatBox;