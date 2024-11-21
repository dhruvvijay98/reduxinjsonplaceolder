import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";

function App() {
  const containerStyle = {
    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1697730150275-dba1cfe8af9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "auto", // Keeps the natural size of the image for tiling
    backgroundRepeat: "repeat", // Ensures the image repeats in both directions
    backgroundPosition: "center", // Centers the initial image
    minHeight: "100vh", // Ensures the container is at least the viewport height
    height: "auto", // Allows the container to grow as content is added
  };
  const location = useLocation();
  return (
    <div className="App" style={containerStyle}>
      {location.pathname === "/login" || location.pathname === "/register" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
