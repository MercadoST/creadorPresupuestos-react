import { useState } from 'react';
import { VirtualMachine } from './VirtualMachine';
import { Categories } from './Categories';


export function Table() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const components = new Array(count).fill().map((_, index) => (
    <VirtualMachine key={index + 1} vm={index + 1}/>
  ));


  return (
    <table className='bg-light container-fluid rounded'>
      <Categories />
      {components}
      <div>
        <button className='btn btn-primary center m-3 ' onClick={handleClick}>Agregar</button>
      </div>
    </table>
  );
}


  /*
  const [virtualMachines, setVirtualMachines] = useState([]);

  function agregarVirtualMachine(infoVirtualMachine) {
    const index = virtualMachines.length + 1;
    const newVirtualMachine = { ...infoVirtualMachine, index };
    setVirtualMachines([...virtualMachines, newVirtualMachine]);
  }

  return (
    <table className='bg-light container-fluid rounded'>
      <Categories />
      <VirtualMachine key={1} vm={1} virtualMachine={1} />
      {virtualMachines.length === 1 && <VirtualMachine vm={1} />}
      {virtualMachines.map((virtualMachine, index = 0) => (
        <VirtualMachine key={index} vm={index} virtualMachine={virtualMachine} />
      ))}
      <div>
        <button className='btn btn-primary center m-3 ' onClick={() => agregarVirtualMachine({})}>Agregar</button>
      </div>
    </table>
  );
}*/