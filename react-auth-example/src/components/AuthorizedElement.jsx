import AuthorizedFunction from "../helpers/AuthorizedFunction";


export default function AuthorizedElement({ roles, children }) {

    return AuthorizedFunction(roles) && children;
}