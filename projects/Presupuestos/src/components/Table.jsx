import { useState, useEffect, useContext } from "react";
import { Categories } from "./Categories.jsx";
import { ModalNotas } from "./ModalNotas.jsx";
import { vmContext } from "../context/vmContext.js";

export function Table() {
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(0);
  const { listaVM, addVM } = useContext(vmContext);

  useEffect(() => {
    handleAdd();
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    addVM(count + 1);
  };

  const handleDisplayNote = (state) =>
    setDisplayNote(state === false ? false : true);

  const handleNota = (text) => {
    setNote(text);
    setDisplayNote(false);
  };

  return (
    <div>
      {displayNote && (
        <ModalNotas
          displayNote={handleDisplayNote}
          handleNota={handleNota}
          note={note}
        />
      )}
      <form className="form-horizontal" action="">
        <table className="tabcontent p-2 bg-light container-fluid rounded">
          <Categories />
          <tbody>{listaVM}</tbody>
        </table>
        <button
          className="btn btn-primary text-white center m-3 "
          type="button"
          onClick={handleAdd}
        >
          Agregar VM
        </button>
        <button
          className="btn btn-warning center m-3  text-white"
          type="button"
          onClick={handleDisplayNote}
        >
          Agregar nota
        </button>
        <button className="m-3 btn btn-success" type="submit">
          Generar PDF
        </button>
      </form>
    </div>
  );
}
