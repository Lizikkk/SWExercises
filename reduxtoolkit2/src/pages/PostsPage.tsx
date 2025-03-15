import React, { useState } from 'react'
import {useFetchPostsQuery } from '../store/post/post.api'
import PostCard from '../components/PostCard'

const PostsPage: React.FC = () => {
    const [page, setPage] = useState(1)
    const [per_page, setperPage] = useState(10)
    const {data, isLoading} = useFetchPostsQuery({page,per_page})
  
    if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>Posts</h1>
      <select value={page} onChange={e => setPage(Number(e.target.value))}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>

      <select value={per_page} onChange={e => setperPage(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",  
  backgroundColor: "#f7fafc"
}}>
  <div style={{
    width: "700px", 
    padding: "16px", 
    backgroundColor: "#f7fafc", 
    borderRadius: "8px", 
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  }}>
    {data?.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
</div>

    </div>
  )
}

export default PostsPage
