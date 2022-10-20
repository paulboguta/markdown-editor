import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "components/Buttons/Button";
import { login } from "features/auth/auth.service";
import { useAppDispatch } from "hooks/hooks";
import { loginUser } from "redux/actions/userActions";
import { getDocumentsAction } from "redux/actions/documentActions";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Background, Input, MoveToLogin, WrapperForm } from "./Login.styles";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const user = await login(email, password);
      const { uid } = user.user;
      dispatch(loginUser(email, uid));
      dispatch(getDocumentsAction(uid));
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
          onClick={onSubmit}
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
