import React from 'react';

function PostCard({ post }){
    return(<>
      
      <div className='post_superior'>
          <img className='img_avatar' src={post.autor.avatar} alt=' '/>
          <div>
            <h3>{post.title}</h3>
            <div>
                <span>escrito por</span>
                <span className='span'>{post.autor.name}</span>
                <span>{post.date}</span>
            </div>
          </div>
          
      </div>
      <div className='inf'>{post.hashtags}</div>
      <div className='post_foto'>
         <img src={post.post} alt=''/>
      </div>
      <div className='post_inferior'>
          <span><img src='/post/coracao.png' alt=' '/></span>
          <span>{post.liks}</span>
          <span><img src='/post/comentario.png' alt=' '/></span>
          <span>{post.comentario}</span>
      </div>
      </>
    );
}
export default PostCard;