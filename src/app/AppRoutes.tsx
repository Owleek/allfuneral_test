import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClientsPage } from '../pages/clients/ClientsPage';
import { ContractorsPage } from '../pages/contractors/ContractorsPage';
import { OrganizationsPage } from '../pages/organizations/OrganizationsPage';
import { LoginPage } from '../pages/login/LoginPage';
import { SearchPage } from '../pages/search/ui/SearchPage';

export const ROUTES = {
  CLIENTS: '/clients',
  CONTRACTORS: '/contractors', 
  ORGANIZATIONS: '/organizations',
  LOGIN: '/login',
  SEARCHPAGE: '/search',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];

const router = createBrowserRouter([
  { path: '/', element: <div>Главная страница</div> },
  { path: ROUTES.CLIENTS, element: <ClientsPage /> },
  { path: ROUTES.CONTRACTORS, element: <ContractorsPage /> },
  { path: ROUTES.ORGANIZATIONS, element: <OrganizationsPage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.SEARCHPAGE, element: <SearchPage /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}