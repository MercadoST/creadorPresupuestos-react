import React, { useState, useEffect } from 'react';


/*
export function Productos({ categoria }) {
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
  
    return (
      <th>
        <select className="form-select">
          <option value="">----</option>
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
    );
  } */