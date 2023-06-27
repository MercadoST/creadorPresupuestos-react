import { useEffect, useState, useContext } from "react";
import { vmContext } from "../context/vmContext.js";
import { Trash } from "./Icon/Trash.jsx";

export function VirtualMachine({ vm, id }) {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(vm);
  const { getPositionById, deleteVM } = useContext(vmContext);

  /*Obtener productos desde el localStorage*/
   useEffect(() => {
    const json = localStorage.getItem('products');
    setProducts(JSON.parse(json));
  }, []);

  const categorias = Array.from({ length: 14 }, (_, i) => i + 1);

  const deleteClick = () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta Virtual Machine?")) {
      deleteVM(id);
    }else event.preventDefault()
  };

  const actPosition = () => {
    setIndex(getPositionById(id));
  };

  const productos = () => {
    return categorias.map((categoria) => (
      <td key={categoria}>
        <select className="form-select" name={categoria} >
          {products.map((producto) => {
            if (producto.id_Category === categoria) {
              return (
                <option key={producto.id} value={producto.nombre}>
                  {producto.nombre}
                </option>
              );
            } else {
              return null;
            }
          })}
        </select>
      </td>
    ));
  };
  useEffect(() => {
    actPosition();
  }, [deleteClick]);

  return (
    <tr className="col row-vm">
      <th className="text-center col-md-1">{`VM ${index + 1}`}</th>
      {productos()}
      <td className="text">
        <button
          onClick={deleteClick}
          className="btn btn-outline-danger btn-1 text-dark"
        >
          <Trash/>
        </button>
      </td>
    </tr>
  );
}
