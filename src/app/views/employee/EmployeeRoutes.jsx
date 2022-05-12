import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';


const EmployeeData = Loadable(lazy(() => import("../employee/Employee")));


const employeeRoutes = [
    {
        path: '/employee/default',
        element: <EmployeeData />,
    },
   
]

export default employeeRoutes
