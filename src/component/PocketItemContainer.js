import React, { useState } from "react";
import Item from "./Item";

const PocketItemContainer = (historys, setHistorys) => {
  const item = historys.historys;

  return (
    <div>
      {item.map((history) => {
        console.log(history);
        return (
          <div>
            <Item history={history} setHistorys={setHistorys} />
          </div>
        );
      })}
    </div>
  );
};

export default PocketItemContainer;
