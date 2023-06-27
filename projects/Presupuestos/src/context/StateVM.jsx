import React, {useState } from "react";
import { VirtualMachine } from "../components/VirtualMachine.jsx";
import { vmContext } from "./vmContext.js";


const StateVM = ({children}) => {

  const [listaVM, setListaVM] = useState([])

  const addVM = (newId) => {
    const newVM = (
      <VirtualMachine key={newId} id={newId} vm={listaVM.length} />
    );
    setListaVM([...listaVM, newVM]);
  }

  const deleteVM = (num) => {
    setListaVM(prevLista => prevLista.filter((component) => component.props.id !== num ));
  };

  const getPositionById = (num) => {
    const position = listaVM.findIndex(
      (componente) => componente.props.id === num);
    return position;
  };

  return (
    <vmContext.Provider
    value={{listaVM, addVM, deleteVM, getPositionById}}>
      {children}
    </vmContext.Provider>
  )
}

export default StateVM