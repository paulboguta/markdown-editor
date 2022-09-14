import styled from "styled-components";
import { BtnLogin } from "../Buttons/BtnLogin";
import { Logo } from "../Header/Logo";

export const LoginForm = () => {
  return (
    <Background>
      <WrapperForm>
        <span>
          <Logo />
        </span>
        <form id="signup">
          <Input>
            <label>Username </label>
            <input type="text" name="username" required />
          </Input>
          <Input>
            <label>Password </label>
            <input type="text" name="password" required />
          </Input>
          <BtnLogin name="Login" />
        </form>
        <MoveToLogin>
          <div>Want to create an account?</div>
          <a>Sign up</a>
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

  ${(props) => props.theme.background}
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
