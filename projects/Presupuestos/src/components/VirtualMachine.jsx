import { useEffect, useState } from "react";
import deleteIcon from "../resources/bote-de-basura.png";


export function VirtualMachine({ vm }) {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchAllProducts = async () => {
      const reqData = await fetch(`http://localhost:8800/products/`)
      const resData = await reqData.json()
      setProducts(resData)
      console.log(resData)
    };
    fetchAllProducts();
  }, []);
  const categorias = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <tbody>
      <tr>
        <th className="m-3 text-center">{`VM ${vm}`}</th>
        {categorias.map((categoria) => (
          <th>
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
        </th>
        ))}
        <td className="text">
          <button className="btn btn-outline-danger btn-1">
            <img
              style={{ width: "1.4rem", height: "1.4rem" }}
              src={deleteIcon}
              alt="deleteIcon"
            />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
