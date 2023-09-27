import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Locations from "./pages/Locations";


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="w-full flex gap-4 items-center bg-blue-500 text-white px-4 py-6">
            <Link to={'/'} className="text-xl hover:underline">
            Home
            </Link>
            <Link to={'/location'} className="text-xl hover:underline">
            Locations
            </Link>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/character/:id" element={<Character/>}/>
          <Route path="/location/:id" element={<Location/>}/>
          <Route path="/location" element={<Locations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
