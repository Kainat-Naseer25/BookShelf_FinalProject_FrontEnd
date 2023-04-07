import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Authentication from "./Authentication/Authentication";
import SignInForm from "./Authentication/SignInForm.js";
import SignUpForm from "./Authentication/SignUpForm.js";
import Dashboard from "./Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authentication />}>
          <Route path="signin" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
