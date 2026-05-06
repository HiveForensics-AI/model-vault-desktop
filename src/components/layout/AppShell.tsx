import React from 'react';
import Sidebar from './Sidebar';
import TopSearchBar from './TopSearchBar';
import RightPanel from './RightPanel';

/**
 * AppShell composes the overall layout of the application. It displays a
 * persistent sidebar on the left, a top search bar, the main content in
 * the middle, and an optional right panel for downloads/system info. The
 * layout is responsive and collapses the right panel on smaller screens.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden text-text">
      {/* Sidebar */}
      <Sidebar />
      {/* Main column: top search + content + right panel */}
      <div className="flex flex-col flex-1 bg-bg">
        {/* Top search bar */}
        <TopSearchBar />
        {/* Main content area with scroll */}
        <div className="flex flex-1 overflow-hidden">
          {/* Page content scroll area */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
          {/* Right activity panel: hidden on small screens */}
          <RightPanel />
        </div>
      </div>
    </div>
  );
}