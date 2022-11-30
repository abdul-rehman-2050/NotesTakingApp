import React from "react";
import TopNav from "../components/navs/TopNav";

export interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const TailwindLayout1 = (props: LayoutProps) => {
  return (
    <div className="min-h-full">
      <TopNav />
      {false && (
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {props.title ? props.title : "Dashboard"}
            </h1>
          </div>
        </header>
      )}
      <main>
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">{props.children}</div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default TailwindLayout1;
