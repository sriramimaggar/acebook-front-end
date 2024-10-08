import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Register />
      <Dashboard />
    </>
  );
}

export default App;
