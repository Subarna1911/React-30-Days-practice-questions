import React from 'react'
import PostCard from './PostCard.jsx'
import postData from '../utils/postData'
import '../css/BlogPost.css'

const BlogPost = () => {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Day 6</h1>
    <div className="main-container">
      <h1>Blog Post</h1>
      <div className="post-grid">
        {postData.map((post)=>(
            <PostCard key={post.id} {...post}/>
        ))}
      </div>
      
    </div>
    </>
  )
}

export default BlogPost
