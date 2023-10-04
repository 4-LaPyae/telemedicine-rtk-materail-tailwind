import {
    Outlet,
    RouterProvider,
    createBrowserRouter,
    json,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Nav from "./pages/navbar";
import Login from "./pages/login";
import ProtectedRoute from "./utils/protected_route.jsx";
import Doctors from "./pages/doctors";
import Sidebar from "./pages/sidebar";
import { doctorListLoader } from "./pages/doctors/feature/doctors_loader";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { LoaderContext } from "./components/loader";
import { dbSpecialistDropdown } from "./pages/dashboard/feature/dashboard_loader";
import Appointment from "./pages/appointments";
import Patients from "./pages/patients";
import Blog from "./pages/blog";
import Category from "./pages/blogCategory";
import Tag from "./pages/blogTag";
import Specialist from "./pages/specialists/Specialist";
import Profile from "./pages/profile/Profile";
import PatientDetail from "./pages/patients/components/PatientDetail";
import Admin from "./pages/admin/Admin";
//import { patientListLoader } from "./pages/patients/feature/patientsLoader";

const NavbarWrapper = () => {
    return (
        <ProtectedRoute>
            <Sidebar />
            <div className="w-5/6 float-right h-screen overflow-y-auto">
                <Nav />
                <Outlet />
            </div>
        </ProtectedRoute>
    );
};

export default function Router() {
    const dispatch = useDispatch();
    const { showLoader, hideLoader } = useContext(LoaderContext);
    const { isAuthenticated } = useSelector((state) => state.auth);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <NavbarWrapper />,
            children: [
                {
                    id: "dashboard",
                    path: "/dashboard",
                    element: <Dashboard />,
                    loader: () => {
                        if (isAuthenticated) {
                            showLoader();
                            return dbSpecialistDropdown(dispatch, hideLoader)();
                        } else {
                            return { data: null };
                        }
                    },
                },
                {
                    path: "/doctors",
                    element: <Doctors />,
                    action: () => {
                        return json({ message: "Hello" });
                    },
                },
                {
                    path: "/specialists",
                    element: <Specialist />,
                },
                {
                    path: "/appointments",
                    element: <Appointment />,
                    action: () => {
                        return json({ message: "Hello" });
                    },
                },
                {
                    path: "/patients",
                    element: <Patients />,
                    children: [
                        {
                            path: ":id",
                            element: <PatientDetail />,
                        },
                    ],
                },
                {
                    path: "/blog",
                    element: <Blog />,
                    action: () => {
                        return json({ message: "Hello" });
                    },
                },
                {
                    path: "/category",
                    element: <Category />,
                    action: () => {
                        return json({ message: "Hello" });
                    },
                },
                {
                    path: "/tag",
                    element: <Tag />,
                    action: () => {
                        return json({ message: "Hello" });
                    },
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
                {
                    path: "/admin",
                    element: <Admin />,
                },
            ],
        },
        {
            path: "/login",
            element: (
                <ProtectedRoute>
                    <Login />
                </ProtectedRoute>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
}
