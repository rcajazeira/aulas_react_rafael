import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index/index.jsx";
import QrCode from "./pages/qrcode/QrCode.jsx";
import AppBar from "./components/AppBar/AppBar.jsx";
import Cadastro from "./pages/cadastro/Cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/qr-code" element={<QrCode />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
      <AppBar />
    </BrowserRouter>
  </StrictMode>
);
