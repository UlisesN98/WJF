import "./LayoutGlobal.css";
import { Link, Outlet } from "react-router-dom";

function LayoutGlobal() {
  return (
    <div className="layout-global">
      <header className="header-global">
        <Link to="/" className="nombre-sitio">
          <h1>WJF</h1>
        </Link>
      </header>

      <main className="contenido-global">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutGlobal;
