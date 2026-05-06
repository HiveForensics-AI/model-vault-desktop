import React from 'react';
import Sidebar from './Sidebar';
import TopSearchBar from './TopSearchBar';
import RightPanel from './RightPanel';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-transparent text-text p-4">
      <div className="glass h-full w-full rounded-[28px] overflow-hidden flex">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <TopSearchBar />
          <div className="flex flex-1 min-h-0">
            <main className="flex-1 overflow-y-auto p-5">{children}</main>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
