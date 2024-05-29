
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Female from './Components/Female'
import Male from './Components/Male'
import Kids from './Components/Kids'
import Allproducts from './Components/Allproducts'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Productdetail from './Components/Productdetail'
import Shopcart from './Components/Shopcart'
import Subscribe from './Components/Subscribe'

function App() {
  
  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
      <Route element={<Layout/>} path='/'>
        <Route path='/' element={<Home/>}/>
        <Route path='/female' element={<Female/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/Male' element={<Male/>}/>
        <Route path='/Allproducts' element={<Allproducts/>}/>
        <Route path='pro' element={<Productdetail/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='Shopcart' element={<Shopcart/>}></Route>
        <Route path='/Jewellery' element={<Subscribe/>}/>
        <Route path='Allproducts' element={<Allproducts/>}></Route>
        <Route path='/Home' element={<Home/>}/>
        <Route path='Allproducts' element={<Allproducts/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
