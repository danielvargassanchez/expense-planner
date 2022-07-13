import Navbar from "../components/Navbar";
import AuthorizedElement from "../components/AuthorizedElement";
import Roles from "../constants/general";
import AdminInfo from "../components/AdminInfo";
import UserInfo from "../components/UserInfo";
import GeneralInfo from "../components/GeneralInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 py-5">
        <AuthorizedElement roles={[Roles.admin]}>
          <AdminInfo></AdminInfo>
        </AuthorizedElement>

        <AuthorizedElement roles={[Roles.user]}>
          <UserInfo></UserInfo>
        </AuthorizedElement>

        <AuthorizedElement roles={[Roles.user, Roles.admin]}>
          <GeneralInfo></GeneralInfo>
        </AuthorizedElement>
      </div>
    </>
  );
};

export default Home;
