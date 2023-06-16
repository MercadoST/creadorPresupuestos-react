import { useState } from 'react';

export function Formulario({ userName, name }) {

    const [components, setComponents] = useState([]);

    const handleAddComponent = () => {
        const newComponent = <MyComponent />;
        setComponents([...Listado, newListado]);
    };
    return (
        <form action="post">
        {Listado}
        <button onClick={handleAddComponent}>Agregar</button>
        </form>
    )
}