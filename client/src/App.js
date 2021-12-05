import React,  {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {getPosts} from './actions/products'
import SetFructs from './components/SetFructs.js'
import Productss from './components/Productss'
import { useDispatch } from 'react-redux'
import './App.css';
import './Menu.css'
import 'antd/dist/antd.css';



const App  = () => {



 


  

  return (
    <div className="App">
  <div class="menu-wrapper">
    <div class="menu" id='menu-id'>
        <label><a id='x-id'>X</a>Mobile</label>
        <ul class="nav-links">
            <a href="/" id='menu-item'><li>Дом</li></a>
            <a href="/create" id='menu-item'><li>Создать</li></a>
            <a href="#" id='menu-item'><li>Профиль</li></a>

        </ul>
    </div>
</div>


<Router>
          <Switch>
          
            <Route exact path="/" component={Productss}   />
            <Route exact path="/create" component={SetFructs} />
            
            

          </Switch>
</Router>



    </div>
  );
}





export default App;

