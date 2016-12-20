import React from 'react'

import Post from './Post'

const PostList = ({ posts, isFetching }) => {
   if (isFetching) {
      return <h4>Loading...</h4>
   }
   return (
      <div>
         {posts.map( (post, i) => <Post key={i} i={i} post={post}/>)}
      </div>
   )
}

export default PostList;
