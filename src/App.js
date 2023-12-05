import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import { NavBar} from "./components/NavBar";
import { ProtectedRoute} from "./components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { USER_DATA } from "./redux/actionConstants";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Exercises } from "./pages/Exercises";
import { Foods } from "./pages/Foods";
import { Goals } from "./pages/Goals";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (token) {
      dispatch({ type: USER_DATA, payload: user });

      navigate("/");
    }
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exercises"
          element={
            <ProtectedRoute>
              <Exercises />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foods"
          element={
            <ProtectedRoute>
              <Foods />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
