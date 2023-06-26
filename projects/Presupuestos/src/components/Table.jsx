import { useState, useEffect, useContext } from "react";
import { Categories } from "./Categories.jsx";
import { ModalNotas } from "./ModalNotas.jsx";
import { vmContext } from "../context/vmContext.js";

export function Table() {
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(0);
  const { listaVM, addVM } = useContext(vmContext)


  useEffect(() => {
    handleAdd();
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    addVM(count + 1)
  };

  const handleDisplayNote = (state) => setDisplayNote(state === false ? false : true);

  const handleNota = (text) => {
    setNote(text);
    setDisplayNote(false)
  };

  return (
    <div>{displayNote &&
      <ModalNotas displayNote={handleDisplayNote} handleNota={handleNota} note={note} />
    }
      <table className="">
        <Categories />
        <tbody>
          {listaVM}
        </tbody>
      </table>
      <button className="btn btn-primary btn-outline-secondary text-white center m-3 " onClick={handleAdd}>
        Agregar VM
      </button>
      <button
        className="btn btn-warning center m-3 btn-outline-secondary text-white"
        onClick={handleDisplayNote}
      >
        Agregar nota
      </button>
    </div>
  );
}
