import React from "react";
import * as Components from "./Components.jsx";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function App() {


  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("successfuly logged in", tokenResponse);
      navigate("/demo");
    }
  });

  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>     
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
          <Components.Button type="button" onClick={() => {
  console.log("Button clicked");
  login();
}}>
  Sign in via Google
</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
    </Components.Container>
  );
}

export default App;
