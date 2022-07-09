import { ReactKeycloakProvider } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import keycloak from "./keycloak";
const initOptions = {
  onLoad: "login-required",
  checkLoginIframe: false,
};
// Wrap everything inside KeycloakProvider
const App = () => {
  const [isAuthenciated, setAuthenciation] = useState(false);
  useEffect(() => {
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenciation(authenticated);
    });
  });
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <Navbar />
    </ReactKeycloakProvider>
  );
};

export default App;
