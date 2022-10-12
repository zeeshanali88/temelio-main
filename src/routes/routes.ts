import { SubRoutes, RoutesConstant } from 'constants/routes'
// import { Personal, Employee } from 'pages/information'

const routes = [{
    path: RoutesConstant.information,
    Component: null,
    children: [{
        path: SubRoutes.personal,
        // Component: Personal,
        children: []
    }, {
        path: SubRoutes.employee,
        // Component: Employee,
        children: []
    }]
}, {
    path: RoutesConstant.notFound,
    // Component: Personal,
    children: []
}]

export default routes