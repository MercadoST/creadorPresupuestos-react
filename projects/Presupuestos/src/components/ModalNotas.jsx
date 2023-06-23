import { useState } from "react";
import "../style/index.css";

export function ModalNotas({ displayNote, handleNota, note}) {
  const [nota, setNota] = useState(note);

  const handleClose = () => {
    displayNote(false);
  };

  const handleInputChange = (event) => {
    setNota(event.target.value);
  };

  return (
    <div id="modal" className="modal" style={{display: 'block'}}>
      <div className="modal-content w-50 h-50">
        <div className="modal-header">
          <h4 className="modal-title">Dejar nota</h4>
        </div>
        <textarea
          id="textoNota"
          className="textoNota form-control h-75"
          placeholder="Aquí puedes realizar el pedido de características más especifícas para tus virtual machines."
          value={nota}
          onChange={handleInputChange}
        ></textarea>
        <div className="text-center">
          <button
            className="btn btn-outline-success w-25"
            onClick={() => handleNota(nota)}
          >
            Guardar
          </button>
          <button className="btn btn-outline-danger w-25" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
