import "./LayoutJuego.css";
import { useNavigate } from "react-router-dom";

function LayoutJuego({ nombre, children }) {
  const navigate = useNavigate();

  return (
    <div className="layout-juego">
      <header className="layout-header">
        {nombre && <h1>{nombre}</h1>}
      </header>

      <main className="layout-contenido">
        {children}
      </main>
    </div>
  );
}

export default LayoutJuego;
