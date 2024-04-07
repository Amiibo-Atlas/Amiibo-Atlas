// const googleOAuthID = import.meta.env.VITE_GOOGLEOAUTH_CLIENT_ID;

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login({ onUserChange }) {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log("Encrypted: ", credentialResponse);
        const decodedUserObj = jwtDecode(credentialResponse.credential);
        console.log("Decoded: ", decodedUserObj);
        onUserChange(decodedUserObj);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
export default Login;

// import { useEffect } from "react";

// function Login() {
//   function handleCallbackResponse(response: any) {
//     console.log("Encoded JWT ID Token: ", response.credential);
//   }

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id: googleOAuthID,
//       callback: handleCallbackResponse,
//     });

//     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);

//   return (
//     <div className="Login">
//       <div id="signInDiv"></div>
//     </div>
//   );
// }

// export default Login;
