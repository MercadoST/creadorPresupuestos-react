import { useState, useEffect, useContext } from "react";
import { Categories } from "./Categories.jsx";
import { ModalNotas } from "./ModalNotas.jsx";
import { vmContext } from "../context/vmContext.js";
import { Invoice } from "./Invoice.jsx";

export function Table( {handleDisplayHeader}) {
  const [products, setProducts] = useState([]);
  const [displayNote, setDisplayNote] = useState(false);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(0);
  const { listaVM, addVM } = useContext(vmContext);
  const [displayInvoice, setDisplayInvoice] = useState(false);
  const [displayPresupuesto, setDisplayPresupuesto] = useState(true);

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

  /*Funcion para mostrar el modal de nota*/
  const handleDisplayNote = (state) =>
    setDisplayNote(state === false ? false : true);

  /*Funcion para guardar la nota*/
  const handleNota = (text) => {
    setNote(text);
    setDisplayNote(false)
  };

  const handleDisplayInvoice = () => {
    setDisplayInvoice(!displayInvoice);
    setDisplayPresupuesto(!displayPresupuesto)
    handleDisplayHeader(false)
  };

  const handleSubmit = () => {
    event.preventDefault();
    handleDisplayInvoice()
    const form = document.getElementById("virtualMachine");
    const rows = form.getElementsByClassName("row-vm");
    const dataForm = Array.from(rows).map((row) => {
      const cells = row.cells;
      const rowData = {};
      rowData["note"] = note
      rowData["id"] = cells[0].textContent;
      for (let i = 1; i < cells.length; i++) {
        const cell = cells[i];
        if (cell.querySelector("select")) {
          rowData[i] = cell.querySelector("select").value;
        }
      }
      return rowData;
    });
    var datosJSON = JSON.stringify(dataForm);
    localStorage.setItem("dataForm", datosJSON);
    
  };

  const Presupuesto = () =>{
    return(
        <div id="virtualMachienView">
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
          <button
            className="m-3 btn btn-success"
            type="submit"
          >
            Generar PDF
          </button>
        </form>
      </div>
    )
}

  return (
    <div>
      {displayPresupuesto && Presupuesto()}
      {displayInvoice && <Invoice fhandleDisplayInvoice={handleDisplayInvoice}/>}
    </div>
  );
}
