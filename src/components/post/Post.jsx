import React from 'react'
import './Post.css'
const Post = (props) => {
  return (
    <>
        <div className="post">
            <div className="post-header">
                <div className="post-header-left">
                    <div className="post-header-left-img">
                        <img src={props.user.profile_image} alt=""/>
                    </div>
                    <div className="post-header-left-name">
                        <p className='name'>{props.user.name}</p>
                        <p className='user-name'>{props.user.username}</p>
                    </div>
                </div>
                <div className="post-header-right">
                    <p>{props.post.created_at}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{props.post.body}</p>
            </div>
        </div>

    </>
  );
}

export default Post;