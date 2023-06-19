import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Productos({ idCategoria}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/products/${idCategoria}`)
                setProducts(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllProducts()
    }, [idCategoria])

    return (
        <th>
            <select className={`form-select`}>
                {products.map(productos => (
                    <option key={productos.id} value={productos.nombre}>
                        {productos.nombre}
                    </option>
                ))}
            </select>
        </th>
    );
}