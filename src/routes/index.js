import { useRoutes, Navigate } from "react-router-dom"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Login from "../pages/Login"
import ForgotPassword from "../components/ForgotPassword"


export default Router = () =>{
    return useRoutes([
        {
            path: '/', element: <DashboardLayout/>,
            children: [{

                element: <Navigate to="/dashboard" replace />,
                index: true,
            },
            {path : '/dashboards', element: <Login/>},
            {path: 'analytics', element: <ForgotPassword/>},
            {path: 'e-commerce', element: <Login/>}
            
            ]
        }
    ])
}