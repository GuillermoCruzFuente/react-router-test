export type RouteType = {
    path: string,
    text: string
}

const routes: Array<RouteType> = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/about',
        text: 'About'
    },
    {
        path: '/projects',
        text: 'Projects'
    },
    {
        path: '/contact',
        text: 'Contact'
    }
]

export default routes