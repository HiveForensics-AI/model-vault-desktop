import React from 'react';
import AppShell from '@/components/layout/AppShell';
import AppRoutes from './router';

/**
 * Root application component. Wraps all pages with the AppShell layout and
 * provides global providers (e.g. query, state) if needed. In this
 * prototype we only compose the layout and routes.
 */
export default function App() {
  return (
    <AppShell>
      <AppRoutes />
    </AppShell>
  );
}