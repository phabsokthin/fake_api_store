import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home';
import ProductDetail from './Page/ProductDetail';
import HeaderBar from './Components/HeaderBar';
import SideBar from './Components/SideBar';


function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderBar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail/>} />
          
        </Routes>
        <SideBar/>
      </BrowserRouter>
    </>
  );
}

export default App;
