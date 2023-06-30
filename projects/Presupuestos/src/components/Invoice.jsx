import "../style/pdf.css";
import armun from "../resources/armun.jpeg";
import { useState, useEffect, useTransition } from "react";

export function Invoice(fhandleDisplayInvoice) {
  const [total, setTotal] = useState(0)
  const [listItems, setListItems] = useState([]);
  const [products, setProducts] = useState([]);
  const handleDisplayInvoice = () => {
    fhandleDisplayInvoice(false);
  };

  /*Obtener productos que eligio el cliente desde el localStorage*/
  useEffect(() => {
    const json = localStorage.getItem("dataForm");
    setListItems(JSON.parse(json));
  }, []);

  /*Obtener productos de la DB desde el localStorage*/
  useEffect(() => {
    const json = localStorage.getItem("products");
    setProducts(JSON.parse(json));
  }, []);

  /*Obtener fecha */
  function getFormattedDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }

  /*Comparar datos para obtener el precio total*/
  function getParcialPrice() {
    var subtotal = 0;
    for (let i = 0; i < listItems.length; i++) {
      const vm = listItems[i];
      console.log(vm)
      for (let j = 1; j <= 14; j++) {
        //console.log("Segund for devuelve todos los items que eligio el usuario: " + vm[j]);
        for (let k = 0; k < products.length; k++) {
          //console.log("Tercer for devuelve todos los nombres de los productos de la DB: " + products[k].nombre);
          if (products[k].id_Category === j) {
            if (vm[j] === products[k].nombre) {
              subtotal += Number(products[k].precio);
            }
          }
        }
      }
    }

    return subtotal
  }


  return (
    <div>
      <div className="">
        <div className="d-flex justify-content-center">
          <button className="btn btn-light m-3">Imprimir</button>
          <button className="btn btn-primary m-3">Descargar</button>
          <button
            className="btn btn-danger m-3 "
            onClick={handleDisplayInvoice}
          >
            Volver
          </button>
        </div>
        <div
          id="invoicePDF"
          className="container-fluid bg-white w-50 mt-5 border-solid border rounded-1 p-4"
        >
          <article>
            <div className="d-flex mb-3">
              <span className="d-flex my-auto">
                <img className="align-self-start w-75 h-75" src={armun} />
              </span>
              <address className="text-start fs-6 lh-2 fst-italic flex-grow-1 ms-auto my-auto">
                <p> Armun </p>
                <p> San Martin #315 Primer piso </p>
                <p> Arroyito, Córdoba </p>
                <p> +5493576420420 </p>
              </address>
              <table className="firstTable my-auto">
                <tbody>
                  <tr>
                    <th>
                      <span className="">Factura #</span>
                    </th>
                    <td>
                      <span>101138</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Fecha</span>
                    </th>
                    <td>
                      <span>{getFormattedDate()}</span>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>

            <table className="secondTable">
              <thead>
                <tr>
                  <th className="w-25">
                    <span>Item</span>
                  </th>
                  <th className="w-50">
                    <span>Descripción</span>
                  </th>
                  <th className="w-25">
                    <span>Price</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {listItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <span>{item.id}</span>
                      </td>
                      <td>
                        <span>{item[1]}</span>
                      </td>
                      <td>
                        <span data-prefix>$</span>
                        <span>{item[1]}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <table className="firstTable">
              <tbody>
                <tr>
                  <th>
                    <span>Total</span>
                  </th>
                  <td>
                    <span data-prefix>$</span>
                    <span>{getParcialPrice()}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <aside>
            <h1 id="notes" className="">
              Nota adicional
            </h1>
            <div>
              <p>
                {listItems.map((item) => {
                  return item.note;
                })}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
