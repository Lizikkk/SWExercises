import React from 'react'
import { IPost } from '../interfaces/post.interface'

interface PostCardProps{
    post: IPost
}

const PostCard:React.FC<PostCardProps> = ({post: {title,body}}) => {
  return (
    <div>
        <div  style={{ backgroundColor: "white", padding: "16px", marginBottom: "16px", borderRadius: "8px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "600", color: "#2d3748" }}>{title}</h1>
            <p style={{ color: "#4a5568", marginTop: "8px" }}>{body}</p>
        </div>
      
    </div>
  )
}

export default PostCard
