import { useState } from 'react';
import { Categories } from './Categories';
import { VirtualMachine } from './VirtualMachine';


export function Table() {



  return (
    <table className='bg-light container-fluid rounded'>
      <Categories />
      <VirtualMachine/>
      <div>
        <button>Agregar</button>
      </div>
    </table>
  )
}