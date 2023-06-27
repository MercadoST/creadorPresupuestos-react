import { useEffect, useState, useContext, useCallback } from "react";
import { vmContext } from "../context/vmContext.js";

export function VirtualMachine({ vm, id }) {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(vm);
  const { getPositionById, deleteVM } = useContext(vmContext);

  /*Obtener productos*/
  useEffect(() => {
    const fetchAllProducts = async () => {
      const reqData = await fetch(`http://localhost:8800/products/`);
      const resData = await reqData.json();
      setProducts(resData);
    };
    fetchAllProducts();
  }, []);

  const categorias = Array.from({ length: 14 }, (_, i) => i + 1);

  const deleteClick = () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta Virtual Machine?")) {
      deleteVM(id);
    }
  };

  const actPosition = () => {
    setIndex(getPositionById(id));
  };

  const productos = () => {
    return categorias.map((categoria) => (
      <td key={categoria}>
        <select className="form-select">
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
    <tr className="col">
      <th className="text-center col-md-1">{`VM ${index + 1}`}</th>
      {productos()}
      <td className="text">
        <button
          onClick={deleteClick}
          className="btn btn-outline-danger btn-1 text-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
