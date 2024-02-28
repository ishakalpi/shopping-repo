import './App.css';
import {BrowserRouter ,Route, Routes ,Navigate} from "react-router-dom"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
