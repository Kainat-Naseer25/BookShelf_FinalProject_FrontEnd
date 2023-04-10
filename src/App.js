import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import BooksCard from "./Card/Card";
import ViewDescription from "./ViewDescription/ViewDescription";
import Authentication from "./Authentication/Authentication";
import SignInForm from "./Authentication/SignInForm.js";
import SignUpForm from "./Authentication/SignUpForm.js";
import Dashboard from "./Dashboard.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authentication />}>
            <Route path="signin" element={<SignInForm />} />
            <Route path="signup" element={<SignUpForm />} />
          </Route>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
