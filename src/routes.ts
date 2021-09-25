import { RouteProps } from "react-router-dom";
import CollegeDetail from "./pages/CollegeDetail";
import CollegeList from "./pages/CollegeList";
import CourseDetail from "./pages/CourseDetail";
import CourseList from "./pages/CourseList";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import StudentDetail from "./pages/StudentDetail";
import StudentList from "./pages/StudentList";

const routes: RouteProps[] = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/colleges",
    component: CollegeList,
    exact: true,
  },
  {
    path: "/colleges/:slug",
    component: CollegeDetail,
    exact: true,
  },
  {
    path: "/students",
    component: StudentList,
    exact: true,
  },
  {
    path: "/students/:slug",
    component: StudentDetail,
    exact: true,
  },
  {
    path: "/courses",
    component: CourseList,
    exact: true,
  },
  {
    path: "/courses/:slug",
    component: CourseDetail,
    exact: true,
  },
  {
    path: "/settings",
    component: Settings,
    exact: true,
  },
];

export default routes;
