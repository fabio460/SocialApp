import React, { useEffect } from 'react';
import {Button} from '@material-ui/core';
import icone_login from './images/icone_login.jfif';
import incone_sininho from './images/icone_sininho.jfif';
function Header(){
    const modal=()=>{
      document.querySelector('.aba_login').style=' background-color:red';
    }
    return<div>
      <header className="header">
        <div className="toolbar">
          <div className="">
            <span>conecta dev</span>
          </div>
          <div className="toolbar_2">
            <Button variant="contained" color="primary">Novo Post</Button>
            <a href=''> <img onClick={modal} className='imgNav' src={icone_login}/></a>
            <a href=''> <img className='imgNav' src={incone_sininho}/></a>
            <div className='aba_login'>
               login
            </div>
          </div>
        </div>
      </header>
    </div>
}
export default Header;