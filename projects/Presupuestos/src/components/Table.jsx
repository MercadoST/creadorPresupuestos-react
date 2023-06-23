import { useState } from "react";
import { VirtualMachine } from "./VirtualMachine";
import { Categories } from "./Categories";
import { ModalNotas } from "./ModalNotas";

export function Table() {
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleDisplayNote = (state) => setDisplayNote(state === false ? false : true);

  const handleNota = (text) => {
    setNote(text);
    setDisplayNote(false)
  };


  const components = new Array(count)
    .fill()
    .map((_, i) => (
      <VirtualMachine handleAdd={handleAdd} key={i + 1} vm={i + 1} />
    ));
      
    return (
      <div>{displayNote &&
        <ModalNotas displayNote={handleDisplayNote} handleNota={handleNota} note={note}/>
      }
        <table className="">
          <Categories />
          {components}
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
