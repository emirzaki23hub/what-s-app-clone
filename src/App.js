import "./App.css";
import React from "react";
import Sidebar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element="" />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
