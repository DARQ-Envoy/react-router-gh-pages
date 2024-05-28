
import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from './components/home'
import About from './components/about'
const BASE = "/react-router-gh-pages/";

function App() {

  return (
    <HashRouter>
     <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<About/>} path='/about'/>

     </Routes>
    </HashRouter>
  )
}

export default App
export {BASE}