import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AllTodosContext } from "./assets/context/context";
import { OpenTodosContext } from "./assets/context/context";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [openTodos, setOpenTodos] = useState([]);
  useEffect(() => {
    setAllTodos(allTodos);
    console.log(allTodos);
  }, [allTodos]);
  return (
    <>
      <AllTodosContext.Provider value={{ allTodos, setAllTodos }}>
        <OpenTodosContext.Provider value={{ openTodos, setOpenTodos }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </OpenTodosContext.Provider>
      </AllTodosContext.Provider>
    </>
  );
}

export default App;
