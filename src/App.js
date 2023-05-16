import React, { useEffect, useState } from "react";

export default function App() {
  //variaveis
  const [hora, setHora] = useState(20);
  const [minutos, setMinuto] = useState(13);
  const [segundos, setSegundo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundo(segundos + 1);
      if (segundos === 59) {
        setSegundo(0);
        setMinuto(minutos + 1);
        if (minutos === 59) {
          setMinuto(0);
          setHora(hora + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        {hora}:{minutos}:{segundos}
      </h2>
    </div>
  );
}
