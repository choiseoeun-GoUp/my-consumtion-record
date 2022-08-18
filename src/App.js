import "./App.css";
import React, { useEffect, useState } from "react";
import NewItemContainer from "./component/NewItemContainer";
import PocketItemContainer from "./component/PocketItemContainer";

function App() {
  const [historys, setHistorys] = useState(null);

  const getHistorys = () => {
    fetch("http://localhost:3001/historys")
      .then((res) => res.json())
      .then((data) => {
        setHistorys(data);
      })
      .catch((e) => {
        console.log(`에러 캐치 ${e}`);
      });
  };
  const domain = "http://localhost:3001/historys";
  useEffect(() => {
    setTimeout(() => {
      fetch(domain)
        .then((res) => res.json())
        .then((data) => {
          setHistorys(data);
        })
        .catch((e) => {
          console.log(`에러 캐치 ${e}`);
        });
    }, 1000);
  }, domain);

  // const addHistorys = (item) => {
  //   fetch("http://localhost:3001/historys/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   })
  //     .then(() => {
  //       getHistorys();
  //     })
  //     .catch((e) => {
  //       console.log(`에러 캐치 ${e}`);
  //     });
  // };
  return (
    <div className="App">
      <h1>my consumtion record</h1>
      <NewItemContainer />
      {historys && (
        <PocketItemContainer historys={historys} setHistorys={setHistorys} />
      )}
    </div>
  );
}

export default App;
