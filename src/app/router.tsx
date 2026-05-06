import React from 'react';
import { useRoutes } from 'react-router-dom';
import DiscoverPage from '@/pages/DiscoverPage';
import DownloadsPage from '@/pages/DownloadsPage';
import LibraryPage from '@/pages/LibraryPage';
import PublishPage from '@/pages/PublishPage';
import SettingsPage from '@/pages/SettingsPage';
import PeersPage from '@/pages/PeersPage';

export default function AppRoutes() {
  // Define the application's routes. Each route maps a path to a page
  // component. As we build additional pages, they can be added here.
  const routes = useRoutes([
    { path: '/', element: <DiscoverPage /> },
    { path: '/downloads', element: <DownloadsPage /> },
    { path: '/library', element: <LibraryPage /> },
    { path: '/publish', element: <PublishPage /> },
    { path: '/peers', element: <PeersPage /> },
    { path: '/settings', element: <SettingsPage /> },
  ]);
  return routes;
}