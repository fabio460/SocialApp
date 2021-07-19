import React, { useState } from 'react';
import incone_sininho from './images/icone_sininho.jfif';
import icone_login from './images/icone_login.jfif';
import {Button} from '@material-ui/core';
import {useHistory } from 'react-router-dom';
import './Teste';

function Header(){
    const [state,setState]=useState(true);
    const modal=()=>{
      if(state){
        document.querySelector('.aba_login').classList.add('login');
        setState(!state);
      } 
      else{
        document.querySelector('.aba_login').classList.remove('login');
        setState(!state);
      }  
    }
    const h = useHistory();
    const login=()=>{
      h.push('/sign');
    }
  return<>  
    <header className="header">
        <div className="toolbar">
          <div className="">
            <span>conecta dev</span>
          </div>
        <div className='aba_login'>
            <a href=' ' >Registrar Gratis</a>
            <a href=' ' onClick={login}>Entrar</a>
        </div>
        <div className="toolbar_2">
            
            <img onClick={modal} className='imgNav' src={icone_login} alt=' '/>
            <img className='imgNav' src={incone_sininho} alt=' '/>
            <Button variant="contained" color="primary">Novo Post</Button>
        </div>
        </div>
    </header>
    
  </>
}
export default Header;