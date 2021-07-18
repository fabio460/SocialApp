
import React from 'react';
function Lista(props){
   return <div className='lista'>
     {props.valor}
   </div>;
}

function Navbar(){
    const tags= [
      {id:1,name:'javascript'},
      {id:2,name:'bootstrap'},
      {id:3,name:'csharp'},
      {id:4,name:'node'},
      {id:5,name:'html'}
    ]
    
    return<>
      <div className="navbar">
         <div className='paper'>
           <button>Registrar Gratis</button>
           <div>
            {tags.map(item=>{
              return <Lista className='lista' valor={item.name}/>
            })}
           </div>
           <div className='lista exibir'>
              <span>exibir mais tags</span>
              
           </div>
         </div>   
         
      </div>
      
    </>
}
export default Navbar;