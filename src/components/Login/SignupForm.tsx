import styled from "styled-components";
import { Logo } from "../Header/Logo";
import { Link } from "react-router-dom";
import { auth } from "../../config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signUpWithEmailAndPassword = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("/");
      }
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
          <Input>
            <label>Email </label>
            <input type="text" name="email" required onChange={changeHandler} />
          </Input>
          <Input>
            <label>Password </label>
            <input
              type="password"
              name="password"
              required
              onChange={changeHandler}
            />
          </Input>
          <Button onClick={signUpWithEmailAndPassword}>Sign Up</Button>
        </form>
        <MoveToLogin>
          <div>Already have an account?</div>
          <Link to="/login">Log In</Link>
        </MoveToLogin>
      </WrapperForm>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperForm = styled.div`
  background-color: #c1c4cb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  border-radius: 4px;

  span {
    margin-bottom: 50px;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  label {
    font-family: "Roboto Mono";
  }

  input[type="text"],
  input[type="password"] {
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

const MoveToLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  border: none;
  background-color: #e46643;
  width: 202px;
  height: 40px;
  margin-top: 30px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f39765;
    transition: 0.3s ease-in;
  }
`;
