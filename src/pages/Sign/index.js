import React from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import cadeadinho from '../Sign/cadeadinho.png';
function SignIn(){
   const h = useHistory();
   const voltar=()=>{
      h.push('/');
   }
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
            <button onClick={voltar}>ENTRAR</button>
            <div>esqueceu a senha? <a href=''>Registre-se</a></div>
         </form>
       </div>

   </>
}
export default SignIn;