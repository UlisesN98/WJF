import "./Evidencia.css";

function EvidenciaImagen({ evidencia }) {
    return (
        <img
          className="respuesta-imagen"
          src={evidencia.src}
          alt="Evidencia"
        />
    );
}

export default EvidenciaImagen;