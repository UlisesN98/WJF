import "./Evidencia.css";

function EvidenciaImagen({ evidencia }) {
    return (
        <img
          className="respuesta-imagen"
          src={evidencia.src}
          alt="No carga la evidencia che"
        />
    );
}

export default EvidenciaImagen;