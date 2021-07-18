import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Header_2 from './components/Header_2';


function Home(){
  
  return<>
      <Header_2 />
      
      <main>
        <Navbar />     
        <Feed />
      </main>
  </>
}
export default Home;