import { useState } from "react";
import "./App.css";
function App(){

  const [search, setSearch] = useState("");

  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry"
  ];

  const filteredFruits = fruits.filter((fruit) =>
    fruit
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return(

  <div className="container">

    <div className="search-box">

      <h1>Search Filter App</h1>

      <input
        type="text"
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
        placeholder="Add Fruit to be Searched"
      />

      {
        filteredFruits.map((fruit,index)=>(

          <div
            className="fruit-item"
            key={index}
          >

            <h2>{fruit}</h2>

          </div>

        ))
      }

    </div>

  </div>
);
}

export default App;