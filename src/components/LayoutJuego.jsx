import { useNavigate } from "react-router-dom";

function LayoutJuego({ titulo, children }) {
  const navigate = useNavigate();

  return (
    <div className="layout-juego">
      <header className="layout-header">
        <button onClick={() => navigate("/")}>
          ← Volver al menú
        </button>

        {titulo && <h1>{titulo}</h1>}
      </header>

      <main className="layout-contenido">
        {children}
      </main>
    </div>
  );
}

export default LayoutJuego;
