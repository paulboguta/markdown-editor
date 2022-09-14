import "./styles/App.css";
import { GlobalStyle } from "./styles/styles";
import { LoginForm } from "./components/Login/LoginForm";
import { SignupForm } from "./components/Login/SignupForm";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
};
