import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/Register/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;
