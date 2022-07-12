import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./components/Home";
import Login from "./components/Login";
import AddType from "./components/AddType";
import GetType from "./components/GetType";
import UpdateType from "./components/UpdateType";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/getType" element={<GetType />} />
          <Route path="/addType" element={<AddType />} />
          <Route path="/updateType" element={<UpdateType />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
