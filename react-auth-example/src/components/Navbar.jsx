import { useKeycloak } from "@react-keycloak/web";
import Roles from "../constants/general";
import AuthorizedElement from "./AuthorizedElement";
const Navbar = () => {
  const { keycloak } = useKeycloak();
  const name = keycloak.idTokenParsed.name;

  return (
    <div className="flex justify-between items-center bg-slate-800 px-5 py-5">
      <h2 className="text-white text-xl">
        Bienvenido <span className="font-bold">{name.toUpperCase()}</span>
      </h2>
      <div className="flex justify-between items-center gap-5">
        <AuthorizedElement roles={[Roles.admin]}>
          <p className="text-white text-xl cursor-pointer">Crear usuario</p>
        </AuthorizedElement>
        <p
          className="text-white text-xl cursor-pointer"
          onClick={keycloak.logout}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Navbar;
