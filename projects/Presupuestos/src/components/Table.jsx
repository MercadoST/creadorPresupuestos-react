import { useState, useEffect, useContext } from "react";
import { Categories } from "./Categories.jsx";
import { ModalNotas } from "./ModalNotas.jsx";
import { vmContext } from "../context/vmContext.js";

export function Table() {
  const [products, setProducts] = useState([]);
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(0);
  const { listaVM, addVM } = useContext(vmContext);

  /*Obtener productos y almacenarlos en el localStorage*/
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8800/products/`);
      const json = await response.json();
      localStorage.setItem("products", JSON.stringify(json));
      setProducts(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleAdd();
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    addVM(count + 1);
  };

  const handleDisplayNote = (state) =>
    setDisplayNote(state === false ? false : true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("virtualMachine");
    const rows = form.getElementsByClassName("row-vm");
    const dataForm = Array.from(rows).map((row) => {
      const cells = row.cells;
      const rowData = [cells[0].textContent];
      for (let i = 1; i < cells.length; i++) {
        const cell = cells[i];
        if (cell.querySelector("select")) {
          rowData.push(cell.querySelector("select").value);
        }
      }
      return rowData;
    });
    var datosJSON = JSON.stringify(dataForm);
    localStorage.setItem("dataForm", datosJSON);
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
      <form
        className="form-horizontal"
        id="virtualMachine"
        onSubmit={handleSubmit}
      >
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
