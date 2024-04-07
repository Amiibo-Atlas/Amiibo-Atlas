import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const NavbarUL = styled.ul`
  background-color: #a08aa0;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin: 0;
  @media (min-width: 587px) {
    flex-direction: row;
  }
`;

const NavbarLi = styled.li`
  list-style-type: none;
  color: white;
  align-self: flex-start;
  flex-grow: 1;
  font-size: 2rem;
  a.active {
    background-color: #d1cbcb;
  }
  @media (min-width: 587px) {
    align-self: center;
  }
`;

const handleLogin = async (response) => {
  const code = response.code;

  try {
    const result = await fetch("/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }), // Send authorization code in req.body
    });

    const userData = await result.json();
    console.log("USER DATA...: ", userData);
  } catch (err) {
    console.error("Error sending authorization code to backend...", err);
  }
};

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarUL>
        <NavbarLi>
          <NavLink to="/">Amiibo Atlas</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="/#">Search</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="/#">Temp page</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to="/#">Login</NavLink>
        </NavbarLi>
        <NavbarLi>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const decodeCredentials = jwtDecode(
                credentialResponse.credential
              );
              // Come back to, not finished. Need to take content and implement retrieved information into state (use express for backend...)
              // console.log("EMAIL: ", decodeCredentials.email);
              // console.log("NAME: ", decodeCredentials.name);
              // console.log("PICTURE: ", decodeCredentials.picture);
              // console.log("GIVEN NAME: ", decodeCredentials.given_name);
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Send this response or the authorization code to your backend
              // Come back to, not finished. Need to take content and implement retrieved information into state (use express for backend...)
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </NavbarLi>
      </NavbarUL>
    </NavbarContainer>
  );
}

export default Navbar;
