import "./App.css";
import Navbar from "./app/navbar/Navbar";
import Footer from "./app/footer/Footer";
import { Outlet } from "react-router-dom";
import FloatingWhatsApp from "./app/components/FloatingWhatsapp";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
