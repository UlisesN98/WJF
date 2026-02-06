import { useNavigate } from "react-router-dom";

function LayoutJuego({ titulo, children }) {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <button onClick={() => navigate("/")}>
          ← Volver al menú
        </button>

        {titulo && <h1>{titulo}</h1>}
      </header>

      <main>{children}</main>
    </div>
  );
}

export default LayoutJuego;
