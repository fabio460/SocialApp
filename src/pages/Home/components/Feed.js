import React from 'react';
import PostCard from '../../../components/PostCard';
import post from './post';
function Feed(){
    
    return<>
       <div className="feed">
          <div>
            {post.map(item=>{
              return <PostCard key={item.id} post={item}/>
            })}
          </div>
      </div>
    </>
}
export default Feed;