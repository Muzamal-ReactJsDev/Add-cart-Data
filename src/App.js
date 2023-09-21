import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Show from "./Components/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import Cartitems from "./Components/Cartitems";
import ColorSchemesExample from "./Components/UserDataSlice/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ColorSchemesExample/>
        <Routes>
          <Route exact path="/" element={<Show />} />
          <Route exact path="/cart" element={<Cartitems/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
