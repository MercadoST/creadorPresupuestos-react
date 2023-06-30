import "../style/index.css";
import { Header } from "./Header";
import StateVM from "../context/StateVM";
import { Table } from "./Table.jsx";
import { useState } from "react";

export function App() {
  const [displayHeader, setdisplayHeader] = useState(true);

  const handleDisplayHeader = () => {
    setdisplayHeader(!displayHeader);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      {displayHeader && <Header/>}
      <div>
        <StateVM>
          <Table handleDisplayHeader={handleDisplayHeader}/>
        </StateVM>
      </div>
    </div>
  );
}
