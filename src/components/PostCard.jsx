import React from 'react'

const PostCard = ({title,body,tags,reactions,views}) => {
  return (
    <div>
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="card-para">{body}</div>
            <div className="card-tags">{tags.map((tag,idx)=>(<span key={idx}> #{tag}</span>))}</div>
    
               <div className="card-reactions">💛{reactions.likes} | ❤ {reactions.dislike} | 💚 {views} views</div>
               <div className="card-views">{views}</div>
          
        </div>
    </div>
  )
}

export default PostCard
