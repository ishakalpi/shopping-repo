import './App.css';
import "react-toastify/dist/ReactToastify.css";

import {BrowserRouter ,Route, Routes ,Navigate} from "react-router-dom"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from './components/NotFound';
import {ToastContainer} from "react-toastify";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path="/cart" Component={Cart}/>
        <Route path="/not-found" Component={NotFound }/>
        <Route path="/" Component={Home}/>
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
