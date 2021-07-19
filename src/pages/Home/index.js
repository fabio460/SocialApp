import React from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Header from './components/Header';


function Home(){
  
  return<>
      <Header />
      
      <main>
        <Navbar />     
        <Feed />
      </main>
  </>
}
export default Home;