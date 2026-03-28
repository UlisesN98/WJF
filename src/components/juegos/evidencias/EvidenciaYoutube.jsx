import "./Evidencia.css";

function EvidenciaYoutube({ evidencia }) {
    return (
        <iframe
          className="respuesta-video"
          src={`https://www.youtube.com/embed/${evidencia.youtubeId}?start=${evidencia.start}&end=${evidencia.end}&autoplay=1&rel=0&modestbranding=1`}
          title="Evidencia"
          allow="autoplay"
        />
    );
}

export default EvidenciaYoutube;