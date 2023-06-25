import { useState, useEffect } from "react";
import { VirtualMachine } from "./VirtualMachine.jsx";
import { Categories } from "./Categories.jsx";
import { ModalNotas } from "./ModalNotas.jsx";

export function Table() {
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(0);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    handleAdd();
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    const newComponent = (
      <VirtualMachine handleDelete={handleDelete} key={count + 1} id={count + 1} vm={components.length} />
    );
    setComponents([...components, newComponent]);
    
  };

  const handleDisplayNote = (state) => setDisplayNote(state === false ? false : true);

  const handleNota = (text) => {
    setNote(text);
    setDisplayNote(false)
  };

  const handleDelete = (num) => {
    setComponents(prevComponents => prevComponents.filter((component) => component.props.id !== num ));
  };

  return (
    <div>{displayNote &&
      <ModalNotas displayNote={handleDisplayNote} handleNota={handleNota} note={note} />
    }
      <table className="">
        <Categories />
        <tbody>
          {components}
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
