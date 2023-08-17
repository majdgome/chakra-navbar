import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Nav from './components/nav';
import Footer from './components/Footer';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function App() {
  return (
  <ChakraProvider>

<BrowserRouter>

<Nav/>









<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/shop' element={<Shop/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/login' element={<Login/>} />
</Routes>





{/* <Footer/> */}





</BrowserRouter>





  

  
  
  </ChakraProvider>
  );
}

export default App;
