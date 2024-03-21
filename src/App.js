import React from 'react'
import './App.css';
import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import loadable from 'react-loadable';
const LoadingComponent=()=><h3>loading wait..</h3>
const Home=loadable({
  loader:()=>import(/* webpackChunkName:'HomePage'*/'./Home'),
  loading:LoadingComponent
})
const About=loadable({
  loader:()=>import(/* webpackChunkName:'AboutPage'*/'./About'),
  loading:LoadingComponent
})
const App = () => {
  return (
    <div>
    <h1 className='colors'><center>hello</center></h1>
    <div>
      <button><Link to="/home" >Home</Link></button>
      <button><Link to="/about" >about</Link></button>
    </div>
    <br/>
    <Routes>
      <Route path='home'Component={Home}/>
      <Route path='about' Component={About}/>
    </Routes>
    <div  className='App-header'>
      <img src={logo} className='App-logo'alt="logo"/>
    </div>
    </div>
  )
}

export default App
