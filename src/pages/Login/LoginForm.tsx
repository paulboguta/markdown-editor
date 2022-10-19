import { useState, ChangeEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "components/Buttons/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../config/config";
import { Background, Input, MoveToLogin, WrapperForm } from "./Login.styles";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <Background>
      <WrapperForm>
        <span>
          <Logo />
        </span>
        <form id="signup">
          <Input htmlFor="email-input">
            Email
            <input
              id="email-input"
              type="text"
              name="email"
              required
              onChange={changeHandler}
            />
          </Input>

          <Input htmlFor="password-input">
            Password
            <input
              id="password-input"
              type="password"
              name="password"
              required
              onChange={changeHandler}
            />
          </Input>
        </form>
        <Button
          onClick={login}
          backgroundColor="#e46643"
          width="202px"
          height="40px"
          mt="30px"
          fontSize="15px"
          color="white"
          borderRadius="4px"
          backgroundColorHover="#f39765"
        >
          Login
        </Button>
        <MoveToLogin>
          <div>Want to create an account?</div>
          <Link to="/signup">Sign up</Link>
        </MoveToLogin>
      </WrapperForm>
    </Background>
  );
};
