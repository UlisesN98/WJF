function Introduccion({ onComenzar, limitePreguntas, tiempoPorPregunta, maxIncorrectos }) {
  return (
    <div className="introduccion">
      <h2>¿Cómo jugar?</h2>
      <p>
        <strong>Anda a Chequearlo</strong> es muy simple: se te presentarán <strong>{limitePreguntas} frases</strong> relacionadas 
        al fútbol y tu objetivo será identificar quién las dijo entre varias opciones.
      </p>

      <p>
        Tendrás <strong>{tiempoPorPregunta} segundos</strong> para responder cada una. 
        Cuanto más rápido aciertes, más puntos obtendrás.
      </p>

      <p>
        Si respondés incorrectamente o se agota el tiempo, no sumarás puntos y se contará como error.
        Al alcanzar <strong>{maxIncorrectos} errores</strong>, el juego termina aunque queden preguntas pendientes.
      </p>

      <p>
        Después de cada respuesta se mostrará una evidencia (video, imagen o enlace) que respalda la respuesta correcta.
      </p>

      <p>
        Atención: no todas las frases son reales ni siempre el autor estará entre las opciones.
        Si creés que ninguna coincide, podés elegir <strong>Ninguna de estas opciones</strong>.
      </p>

      <button onClick={onComenzar} className="boton-accion">
        Comenzar
      </button>
    </div>
  );
}

export default Introduccion;