import "./Evidencia.css";

function EvidenciaCita({ evidencia }) {
    return (
        <div className="respuesta-cita">
          <img
            className="respuesta-imagen"
            src={evidencia.img}
            alt="Evidencia"
          />
          <a className="respuesta-link" href={evidencia.url} target="_blank" rel="noopener noreferrer">
            Fuente
          </a>
        </div>
    );
}

export default EvidenciaCita;