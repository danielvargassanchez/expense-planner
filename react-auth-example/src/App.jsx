import { useKeycloak } from "@react-keycloak/web";
import "./App.css";
import Home from "./pages/Home";
import Loading from './components/Loading';
const App = () => {
  const { initialized, keycloak } = useKeycloak();

  return <>{initialized ? <Home/> : <Loading/>}</>;
};

export default App;
