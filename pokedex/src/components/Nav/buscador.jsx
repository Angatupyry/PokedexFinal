
import { useEffect, useState } from "react";


function Buscador() {
  const list = [
    
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <div className="app">
      <div>
        <input placeholder="Buscar"  name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList && filterList.map((item) => <div>{item}</div>)}
    </div>
  );
}

export default Buscador;
