import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Button } from "components/Buttons/Button";
import {
  Background,
  Input,
  MoveToLogin,
  WrapperForm,
} from "pages/Login/Login.styles";
import { signup } from "features/auth/auth.service";
import { useAppDispatch } from "hooks/hooks";
import { signUpUser } from "redux/actions/userActions";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const SignupForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const user = await signup(email, password);
      const { uid } = user.user;
      dispatch(signUpUser(email, uid));
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
          <Input>
            Email
            <input type="text" name="email" required onChange={changeHandler} />
          </Input>

          <Input>
            Password
            <input
              type="password"
              name="password"
              required
              onChange={changeHandler}
            />
          </Input>

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
            Sign Up
          </Button>
        </form>
        <MoveToLogin>
          <div>Already have an account?</div>
          <Link to="/login">Log In</Link>
        </MoveToLogin>
      </WrapperForm>
    </Background>
  );
};
