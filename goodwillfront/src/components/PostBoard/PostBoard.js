import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import { react } from "@babel/types";

function PostBoard() {
  const [posts, setPosts] = useState([{username: "", content: "", likes: 0}])
  const [userPost, setUserPost] = useState({username: "", content: "", likes: 0})
  const [showForm, setShowForm] = useState(false)
  const postsArr = [{username: "user1", content: "post1", likes: "0"}, {username: "user2", content: "post2", likes: 0}];
  function handleShowForm() {
    setShowForm(true)
  }
  function handleInput(event) {
    const {value} = event.target;
    setUserPost({...userPost, "content":value})
  }

  function handlePost() {
    fetch('http://localhost:5000/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userPost)
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

    handleHideForm()
  }

  function handleHideForm() {
    setShowForm(false);
  }


//   useEffect(() => {
//     fetch('http://localhost:5000/posts')
//         .then(response => response.json())
//         .then((postData)=> {setPosts(postData)});
//   }, []); 


  return (
    <div style={{ position: "relative", height: "500px" }}>
        {showForm ? (
            <div>
                <form>
                    <input type="text" onChange={handleInput}></input>
                </form>
                <button type="submit" className="btn btn-primary btn-block" onClick={handlePost}>Submit</button>
            </div>
        ) : (
            <div>
            <ul>

                {/* in the comments is the fucntiont to output each item in the posts array as a list item*/}
                {/* {posts.map((content, index)=>
                    {return (<li model={{sender: content.username, message: content.message}}></li>)}) } */}
                    {postsArr.map((post, index) => (
          <li key={index}>
            <strong>Username:</strong> {post.username}
            <br />
            <strong>Content:</strong> {post.content}
          </li>
        ))}
            </ul>
            <button type="button" onClick={handleShowForm}>Post</button>
            </div>
            )
        }
    </div> 
  );
}

export default PostBoard;