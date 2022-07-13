import Keycloak from 'keycloak-js';

const keycloakConfig = {
  realm: "react-users",
  url: "http://localhost:8080/auth/",
  clientId: "react-app",
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
