import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './PostBoard.css';

import { react } from "@babel/types";
import { useNavigate } from "react-router-dom";

function PostBoard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([{username: "", content: "", likes: 0}])
  const [userPost, setUserPost] = useState({username: "", content: "", likes: 0})
  const [showForm, setShowForm] = useState(false)
  function handleInput(event) {
    const {value} = event.target;
    setUserPost({...userPost, "content":value})
  }

  function handleUsername(event) {
    const {value} = event.target;
    setUserPost({...userPost, "username":value})
  }


  function handlePost() {
    const sendPost = () => {fetch('http://127.0.0.1:5000/addposts', {
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
  };
    sendPost();
    postsDisplay.push(userPost)
    setPosts(...postsDisplay)
    handleHideForm()
  }


  function handleShowForm() {
    setShowForm(true)
  }
  function handleHideForm() {
    setShowForm(false);
    // navigate("/");
  }

  const [postsDisplay, setPostsDisplay] = useState([]); 
  useEffect(() => {

      const fetchPosts = () => {
          fetch('http://127.0.0.1:5000/posts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); 
          })
          .then(data => {
            setPostsDisplay(data); 
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
        };
  
      fetchPosts();
    }, []); 

// load the posts array with data from the backend once the component mounts
  useEffect(() => {
    const fetchMessages = () => {
      fetch('http://127.0.0.1:5000/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setPostsDisplay(data); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    };

    fetchMessages();
  }, []);




  return (
    <div className="post-board" style={{ position: "relative", height: "auto" }}>
      {showForm ? (
        <div>
          <form>
          <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={handleUsername} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Content:</label>
              <input className="form-control" id="content" placeholder="Enter content" onChange={handleInput}/>
          </div>
          </form>
          <button type="submit" className="btn btn-primary btn-block" onClick={handlePost}>Submit</button>
        </div>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {postsDisplay.map((post, index) => (
              <li className="post-item" key={index}>
                <div className="post-header">
                  <strong>Username:</strong> {post.username}
                  <span className="post-likes">Likes: {post.likes}</span>
                </div>
                <div className="post-content">
                  {post.content}
                </div>
                {/* You can add a post footer if you have additional info to display */}
                {/* <div className="post-footer">
                  Additional info here
                </div> */}
              </li>
            ))}
          </ul>
          <button type="button" className="btn" onClick={handleShowForm}>Post</button>
        </div>
        
        )
      }
    </div>
  );
}

export default PostBoard;