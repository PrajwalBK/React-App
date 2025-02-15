import Button from 'react-bootstrap/Button';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import PostUser from './components/postUser/postUser';
import UpdateUser from './components/updateUser/updateUser';
import Nomatch from './components/nomatch/nomatch';
import Header from './components/header/header';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<Dashboard></Dashboard>}></Route>
        <Route path='/postUser' element={<PostUser></PostUser>}></Route>
        <Route path='/updateUser/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='*' element = {<Nomatch></Nomatch>}></Route>
      </Routes>
    </div>
  );
}

export default App;
