import { useKeycloak } from '@react-keycloak/web'

const Navbar = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <div className="flex justify-around">
      <p>Auth Application</p>
      <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
    </div>
  );
};

export default Navbar;
