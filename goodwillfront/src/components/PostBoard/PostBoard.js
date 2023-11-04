import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";


import { react } from "@babel/types";


function PostBoard() {
  const [posts, setPosts] = useState([{username: "", content: "", likes: 0}])   // array of posts
  const [userPost, setUserPost] = useState({username: "", content: "", likes: 0})   // post object
  const [showForm, setShowForm] = useState(false)   // boolean variable to keep track of showForm status

  function handleInput(event) {
    const {value} = event.target;
    setUserPost({...userPost, content:value})
  }


  function handlePost() {
    // post request to send the new post to the backend
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

    // update the array and the state
    posts.push(userPost)
    setPosts(...posts)
    handleHideForm()    // hide the post form
  }


  function handleShowForm() {
    setShowForm(true)
  }
  function handleHideForm() {
    setShowForm(false);
  }


//load the posts array with data from the backend once the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/posts')
        .then(response => response.json())
        .then((postData)=> {setPosts(postData)});
  }, []);


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
              {posts.map((post, index) => (
                <li key={index}>
                  <strong>Username:</strong> {post.username}
                  <br />
                  <strong>Content:</strong> {post.content}
                  <br />
                  <strong>Likes:</strong> {post.likes}
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
