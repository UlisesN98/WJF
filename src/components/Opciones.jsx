function Opciones({ opciones, onElegir }) {
  return (
    <div>
      {opciones.map((opcion) => (
        <button
          key={opcion}
          onClick={() => onElegir(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}

export default Opciones;
