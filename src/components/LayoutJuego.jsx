function LayoutJuego({ titulo, onVolverAlMenu, children }) {
  return (
    <div>
      <header>
        <button onClick={onVolverAlMenu}>
          ← Volver al menú
        </button>

        {titulo && <h1>{titulo}</h1>}
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}

export default LayoutJuego;
