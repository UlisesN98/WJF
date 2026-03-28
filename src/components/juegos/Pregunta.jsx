import "./Pregunta.css";

function Pregunta({ texto }) {
  return (
    <blockquote className="pregunta">
      “{texto}”
    </blockquote>
  );
}

export default Pregunta;
