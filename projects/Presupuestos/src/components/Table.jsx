import { useState } from "react";
import { VirtualMachine } from "./VirtualMachine";
import { Categories } from "./Categories";

export function Table() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
    console.log(components.length+1);
  };

  const components = new Array(count)
    .fill()
    .map((_, i) => (
      <VirtualMachine handleClick={handleClick} key={i + 1} vm={i + 1} />
    ));

  return (
    <div>
      <table className="bg-light container-fluid rounded">
        <Categories />
        {components}
      </table>
      <button className="btn btn-primary center m-3 " onClick={handleClick}>
        Agregar
      </button>
    </div>
  );
}
