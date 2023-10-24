import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home';
import ProductDetail from './Page/ProductDetail';
import HeaderBar from './Components/HeaderBar';
import SideBar from './Components/SideBar';
import Toast from './Components/Toast';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderBar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail/>} />
            <Route path='/toast' element={<Toast/>}/>
        </Routes>
        <Toaster/>
        <SideBar/>
      </BrowserRouter>
    </>
  );
}

export default App;
