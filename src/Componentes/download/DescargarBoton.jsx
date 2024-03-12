import React from "react";

const DescargarBoton = () => {
  const handleDescarga = () => {
    const rutaArchivo = "/Docs/entrada.pdf";
    const link = document.createElement("a");
    link.href = rutaArchivo;
    link.download = "entrada.pdf";
    link.click();
  };

  return (
    <div>
      <button onClick={handleDescarga}>Descargar Archivo</button>
    </div>
  );
};

export default DescargarBoton;
