function checkLogin(loginData) {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
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

}

function sendMessage(messageData) {
    fetch('http://localhost:5000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData)
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
}

function postPosts(userData) {
    fetch('http://localhost:5000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
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
}

export { checkLogin, postPosts, sendMessage };
