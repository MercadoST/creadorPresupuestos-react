import { useState } from "react";
import { VirtualMachine } from "./VirtualMachine.jsx";
import { Categories } from "./Categories.jsx";
import { ModalNotas } from "./ModalNotas.jsx";

export function Table() {
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);


  const handleAdd = () => {
    const newComponents = [...components];
    setCount(count + 1);
    const newComponent = (
      <VirtualMachine handleDelete={handleDelete} key={count + 1} vm={components.length + 1} />
    );
    newComponents.push(newComponent);
    setComponents(reorderComponents(newComponents));
  };

  const reorderComponents = (components) => {
    return components.sort((a, b) => a.vm - b.vm);
  };

  const handleDisplayNote = (state) => setDisplayNote(state === false ? false : true);

  const handleNota = (text) => {
    setNote(text);
    setDisplayNote(false)
  };

  const handleDelete = (vm) => {
    const newComponents = components.filter((component) => component.vm !== vm);
    setComponents(reorderComponents(newComponents));
  };

  const [components, setComponents] = useState(
    new Array(count).fill().map((_, i) => (
      <VirtualMachine handleDelete={handleDelete} key={i + 1} vm={i + 1} />
    )));

  return (
    <div>{displayNote &&
      <ModalNotas displayNote={handleDisplayNote} handleNota={handleNota} note={note} />
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
