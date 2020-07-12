import PageNotFound from "../components/PageNotFound";
import Login from "../components/Login";
import { ROUTES_PATH } from "../constants/routes";
import Dashboard from "../components/Dashboard";
import UserProfile from "../components/UserProfile";

const mainRoutes = [
  {
    path: ROUTES_PATH.DASHBOARD,
    exact: true,
    component: Dashboard,
    isProtected: true,
  },
  {
    path: ROUTES_PATH.USERS,
    exact: true,
    component: UserProfile,
    isProtected: true,
  },
  {
    path: ROUTES_PATH.LOGIN,
    exact: true,
    component: Login,
    isProtected: false,
  },
  {
    path: "/*",
    component: PageNotFound,
  },
];

export default mainRoutes;
