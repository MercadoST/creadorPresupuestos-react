import { useState } from 'react';
import { Categories } from './Categories';
import { VirtualMachines } from './VirtualMachines';

export function Table() {
    return (
        <div className='bg-light container-fluid rounded'>
            <Categories/>
            <VirtualMachines/>
        </div>
    )
}