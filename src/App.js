import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Productos from './components/Productos'
class App extends React.Component{
   render(){
     return(
       <div className="app">
         <Router>
           <Header/>
           <Banner/>
           <Productos/>
           <Footer/>
         </Router>
       </div>
     );
   }
}

export default App;
