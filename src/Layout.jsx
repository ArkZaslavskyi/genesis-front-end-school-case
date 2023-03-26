import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./components/AppBar/AppBar";

export const Layout = () => {
  return (
    <>
      <div className="Container">
        <AppBar />
      </div>
      <Suspense fallback={<>"Loading..."</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
