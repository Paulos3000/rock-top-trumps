import React from 'react'

import Post from './Post'

const PostList = ({ posts }) => (
   <div>
      {posts.map( (post, i) => <Post key={i} i={i} post={post}/>)}
   </div>
)

export default PostList;
