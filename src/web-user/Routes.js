import React, { Fragment, lazy, Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';


 import AuthGuard from 'src/web-user/ui/components/AuthGuard';
// import GuestGuard from 'src/web-user/ui/components/GuestGuard';
import MainLayout from "./ui/layouts/MainLayout";
// import LoadingScreen from "./ui/components/LoadingScreen";
import SplashScreen from "./ui/components/SplashScreen";
// import ErrorPage from "src/web-user/ui/pages/error/NotFound"
// import AdminGuard from "./ui/web-user/guards/AdminGuard";
// import AdminLayout from "./ui/layouts/AdminLayout";

// Aplicação
export const INDEX_ROUTE = "/";
export const APP_ROUTE = "/app";

// Autenticação
export const LOGIN_ROUTE = "/entrar";
export const REGISTER_ROUTE = "/cadastro";

// Startups
export const MY_STARTUP_ROUTE = "/app/minha-startup";
export const STARTUPS_ROUTE = "/app/startups";
export const EDIT_STARTUP_ROUTE = "/app/editar-startup";
export const CREATE_STARTUP_ROUTE = "/app/minha-startup/criar/startup";


export const CHAT_ROUTE = "/app/chat";
export const BOARD_ROUTE = "/app/board";
export const DASHBOARD_ROUTE = "/app/dashboard";

export const WORKSHOPS_ROUTE = "/app/workshops";

export const ADMIN_ROUTE = "/app/admin";

export const MY_PROFILE_ROUTE = "/app/meuperfil"

export const CREATE_WORKSHOP_ROUTE = ADMIN_ROUTE + "/workshop/criar";
const routesConfig = [
        {
                exact: true,
                layout: MainLayout,
                path: INDEX_ROUTE,
                component: lazy(() => import('src/web-user/ui/pages/home'))
        },
        {
                exact: true,
                layout: MainLayout,
                path: REGISTER_ROUTE,
                component: lazy(() => import('src/web-user/ui/pages/register'))
        },
        {
                exact: true,
                layout: MainLayout,
                path: LOGIN_ROUTE,
                component: lazy(() => import('src/web-user/ui/pages/login'))
        },
        {
                path: APP_ROUTE,
                layout: MainLayout,
                guard: AuthGuard,
                routes: [
                        {
                           exact: true,
                           path: "/app/welcome",
                                component: lazy(() => import('src/web-user/ui/pages/welcome'))
                        }
        ]
        },
        // {
        //         path: APP_ROUTE,
        //         layout: MainLayout,
        //         guard: AuthGuard,
        //         routes: [
        //                 {
        //                         exact: true,
        //                         path: APP_ROUTE,
        //                         component: () => <Redirect to={"/app/minha-startup"} />
        //                 },
        //                 {
        //                         exact: true,
        //                         path: STARTUPS_ROUTE,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/startup/ListStartups'))
        //                 },
        //                 {
        //                         path: MY_STARTUP_ROUTE,
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/startup/MyStartup'))
        //                 },
        //                 {
        //                         path: "/app/startups/:id",
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/startup/StartupDetails'))
        //                 },
        //                 {
        //                         path: CHAT_ROUTE,
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/chat/ChatPage'))
        //                 },
        //                 {
        //                         path: DASHBOARD_ROUTE,
        //                         exact: true,
        //                         component: () => <Redirect to={"/app/minha-startup"} />
        //                 },
        //                 {
        //                         path: CREATE_STARTUP_ROUTE,
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/startup/CreateStartup'))
        //                 },
        //                 {
        //                         path: EDIT_STARTUP_ROUTE,
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/startup/EditStartup')),
        //                 },
        //                 {
        //                         path: WORKSHOPS_ROUTE,
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/workshops/WorkshopListPage')),
        //                 },
        //                 {
        //                         path: "/app/workshops/:id",
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/workshops/WorkshopDetails'))
        //                 },
        //                 {
        //                         path: MY_PROFILE_ROUTE,
        //                         exact: true,
        //                         component: lazy(() => import('src/startup-space-web/ui/pages/account/AccountPage')),
        //                 },
        //                 {
        //                         path: ADMIN_ROUTE,
        //                         guard: AdminGuard,
        //                         layout: AdminLayout,
        //                         routes: [
        //                                 {
        //                                         path: ADMIN_ROUTE + "/workshops",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/admin/workshops/WorkshopsManagement'))
        //                                 },
        //                                 {
        //                                         path: ADMIN_ROUTE + "/workshop/:id/editar",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/admin/workshops/WorkshopDetails'))
        //                                 },
        //                                 {
        //                                         path: CREATE_WORKSHOP_ROUTE,
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/workshops/CreateWorkshop'))
        //                                 },
        //                                 {
        //                                         path: ADMIN_ROUTE,
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/admin')),
        //                                 },
        //
        //                                 {
        //                                         path: ADMIN_ROUTE + "/usuarios",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/admin/Users')),
        //                                 },
        //                                 {
        //                                         path: ADMIN_ROUTE + "/startups",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/admin/Startups')),
        //                                 },
        //                                 {
        //                                         path: ADMIN_ROUTE + "/startup/:id/exibir",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/admin/Startups/ViewStartup')),
        //                                 },
        //                                 {
        //                                         path: ADMIN_ROUTE +"/editar-user/:id",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/account/AccountPage')),
        //                                 },
        //                                 {
        //                                         path: ADMIN_ROUTE +"/editar-startup/:id",
        //                                         exact: true,
        //                                         component: lazy(() => import('src/startup-space-web/ui/pages/startup/EditStartup')),
        //                                 },
        //
        //                         ]
        //                 }
        //         ]
        // },
];

const renderRoutes = (routes) => {
        return (routes ? (
                <Suspense fallback={<SplashScreen />}>
                        <Switch>
                                {routes.map((route, i) => {
                                        const Guard = route.guard || Fragment;
                                        const Layout = route.layout || Fragment;
                                        const Component = route.component;

                                        return (
                                                <Route
                                                        key={i}
                                                        path={route.path}
                                                        exact={route.exact}
                                                        render={(props) => (
                                                                <Guard>
                                                                        <Layout>
                                                                                {route.routes
                                                                                        ? renderRoutes(route.routes)
                                                                                        : <Component {...props} />}
                                                                        </Layout>
                                                                </Guard>
                                                        )}
                                                />
                                        );
                                })}
                        </Switch>
                </Suspense>
        ) : null);
};

function Routes() {
        return renderRoutes(routesConfig);
}

export default Routes;
