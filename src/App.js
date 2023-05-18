import React, { useEffect, useState } from "react";
import API from './API'

export default function App() {
  //variaveis
  const [nomes, setNomes] = useState([{}]);

  async function initApi() {
    
    let pegaNomes = await API.getPersons();
    setNomes(pegaNomes);
  }

  useEffect(() => {

    initApi();

  }, []);

  return (
    <div>
      {nomes.map(function (data) {
        return (
          <div>
            <h2>
              {data.name} | {data.email}
            </h2>
          </div>
        );
      })}
    </div>
  );
  
}

