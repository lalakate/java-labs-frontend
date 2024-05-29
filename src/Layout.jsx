import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="main-header">
        <Link to="/">
          <h1 className="logo-text">universities</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};