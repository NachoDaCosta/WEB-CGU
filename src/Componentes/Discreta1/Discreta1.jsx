import React, { useState } from "react";
import "./Discreta1.css";

const Discreta1 = () => {
  const [n, setN] = useState("");
  const [r, setR] = useState("");
  const [resultados, setResultados] = useState({
    combinaciones: 0,
    combinacionesRepeticion: 0,
    permutaciones: 0,
    sobreyectivas: 0,
    sterling: 0,
  });

  // Función para calcular el factorial
  function factorial(num) {
    if (num < 0) return 0; // No se puede calcular el factorial de un número negativo
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Función para calcular combinaciones
  function combinaciones(n, r) {
    if (r > n) return 0; // Si r es mayor que n, no hay combinaciones posibles
    return factorial(n) / (factorial(r) * factorial(n - r));
  }

  // Función para calcular combinaciones con repetición
  const combinacionesConRepeticion = (n, r) => {
    return factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
  };

  // Función para calcular permutaciones
  const permutaciones = (n, r) => {
    return factorial(n) / factorial(n - r);
  };

  // Función que calcula sob(n, r)
  const sob = (elementos, conjuntos) => {
    let m = elementos;
    let n = conjuntos;
    // n=elementos r=contenedores
    let total = 0;
    if (m < n) {
      return total;
    } else if (m >= n && n > 0) {
      for (let k = 0; k < n; k++) {
        const signo = Math.pow(-1, k); // (-1)^k
        const combinacion = combinaciones(n, k); // C(n, r)
        const potencia = Math.pow(n - k, m); // (n - k)^n

        // Sumar al total
        total += signo * combinacion * potencia;
      }
    } else if (n === 0) {
      total = 0;
    }

    return total; // Retornar el resultado total
  };

  const S = (n, r) => {
    if (r !== 0) {
      return sob(n, r) / factorial(r);
    }
  };

  // Función para realizar el cálculo al presionar el botón
  const calcular = () => {
    const numN = parseInt(n) || 0; // Convertimos a número o 0
    const numR = parseInt(r) || 0; // Convertimos a número o 0

    if (numR > numN) {
      alert("El valor de r debe ser menor o igual a n.");
      return;
    }

    const comb = combinaciones(numN, numR);
    const combRep = combinacionesConRepeticion(numN, numR);
    const perm = permutaciones(numN, numR);
    const sobre = sob(numN, numR);
    const stir = S(numN, numR);

    setResultados({
      combinaciones: comb,
      combinacionesRepeticion: combRep,
      permutaciones: perm,
      sobreyectivas: sobre,
      sterling: stir,
    });
  };

  return (
    <div className="discreta1-container">
      <h1>Calculadora de Combinaciones y Permutaciones</h1>
      <div className="ipnut-container">
        <label>
          N° de elementos (n):
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)} // Guardamos como string
          />
        </label>
        <label>
          N° de elementos (r):
          <input
            type="number"
            value={r}
            onChange={(e) => setR(e.target.value)} // Guardamos como string
          />
        </label>
      </div>

      <button onClick={calcular} className="calcular">
        Calcular
      </button>
      <div className="resultados">
        <h3>Resultados:</h3>
        <div className="info-resultados">
          <div className="fill">
            A ({n === "" ? "" : n},{r === "" ? "" : r}):
          </div>
          <div className="fill">{resultados.permutaciones}</div>
        </div>
        <div className="info-resultados">
          <div className="fill">
            C ({n},{r}):
          </div>
          <div className="fill">{resultados.combinaciones}</div>
        </div>
        <div className="info-resultados">
          <div className="fill">
            CR ({n},{r}):
          </div>
          <div className="fill">{resultados.combinacionesRepeticion}</div>
        </div>

        <div className="info-resultados">
          <div className="fill">
            Sob ({n},{r}):
          </div>
          <div className="fill">{resultados.sobreyectivas}</div>
        </div>
        <div className="info-resultados">
          <div className="fill">
            S ({n},{r}):
          </div>
          <div className="fill">{resultados.sterling}</div>
        </div>
      </div>

      <span>
        IMPORTANTE: tanto (n,r) deben ser menores a 100 porque sino no funciona
        por memoria
      </span>
    </div>
  );
};

export default Discreta1;
