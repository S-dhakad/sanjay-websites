import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Contact from './component/Pages/Contact';
import Footer from './component/Pages/Footer';
import Main from "./component/Pages/Main";
import Navbar from './component/Pages/Navbar';
import Resume from "./component/Pages/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
