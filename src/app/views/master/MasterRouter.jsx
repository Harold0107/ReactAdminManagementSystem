import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';


const BatchData = Loadable(lazy(() => import("../master/Batch")));


const masterRoutes = [
    {
        path: '/master/Batch',
        element: <BatchData />,
    },
   
]

export default masterRoutes
