import React from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import cadeadinho from '../Sign/cadeadinho.png';
import {axios} from 'axios';
import { useSelector } from 'react-redux';
function SignIn(){
   const h = useHistory();
   async function ajax(){
       let req = await fetch('https://api.github.com/users/fabio460');
       let json = await req.json();
       console.log(json);
   }
   const hundleSignIn= ()=>{
      h.push('/');
      ajax()
   }
   const account = useSelector(state=>state);
   console.log(account);
   return<>
       <div className='SignIn'>
         <aside>
            <h1>
                Simplificando a forma de conectar desenvolvedores de software!
            </h1>
            <div className='textoSignIn'>
                Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
            </div>
         </aside>
         <form>
            
            <img src={cadeadinho}/>
            <h4>acesso</h4>
            <input type='email*' placeholder='email'/>
            <input type='password*' placeholder='senha'/>
            <button onClick={hundleSignIn}>ENTRAR</button>
            <div>esqueceu a senha? <a href=''>Registre-se</a></div>
         </form>
       </div>

   </>
}
export default SignIn;