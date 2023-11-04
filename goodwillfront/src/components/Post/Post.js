

function Post({ post }) {
    return (
      <div className="post-container">
        <div className="post-header">
          <strong>{post.username || 'Anonymous'}</strong>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="post-footer">
          <span>Likes: {post.likes}</span>
        </div>
      </div>
    );
  }
  
  export default Post;
  