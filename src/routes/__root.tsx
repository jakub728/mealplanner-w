import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

import "../style.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-amber-50 h-screen">
      <div className="p-2 flex gap-2 text-lg justify-around bg-amber-600">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/privacy"
          activeProps={{
            className: "font-bold",
          }}
        >
          Polityka prywatnośći
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
