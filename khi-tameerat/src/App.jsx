import './App.css';
import Navbar from './app/navbar/Navbar';
import Footer from './app/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
