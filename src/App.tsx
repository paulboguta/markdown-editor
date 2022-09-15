import "./styles/App.css";
import { GlobalStyle } from "./styles/styles";
import { LoginForm } from "./components/Login/LoginForm";
import { SignupForm } from "./components/Login/SignupForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useAuth } from "./hooks";

export const App = () => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Provider>
  );
};
