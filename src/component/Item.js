import React, { useState, useEffect, useRef } from "react";

const Item = (history, setHistorys) => {
  const [edited, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(history.history.title);

  console.log(history.history.id);
  const deleteHandler = () => {
    fetch("http://localhost:3001/historys/" + history.history.id, {
      method: "DELETE",
    });
    console.log("delete" + history.history.id);
  };
  const editHandler = () => {
    setEdited(true);
  };
  const onChangeEditInput = (e) => {
    setNewTitle(e.target.value);
  };
  const onClickSubmitButton = () => {
    const item = history.history;
    const changeItem = {
      title: editInputRef,
      amount: item.amount,
      createdAt: item.createdAt,
      type: "income",
    };

    fetch("http://localhost:3001/historys/" + item.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeItem),
    });
    console.log(item.id);

    setEdited(false); // 수정모드를 다시 읽기모드로 변경
  };
  const editInputRef = useRef(null);

  return (
    <>
      <div key={history.history.id} className="itemBox">
        {edited ? (
          <input
            type="text"
            value={newTitle}
            ref={editInputRef} // ref 로 DOM에 접근
            onChange={onChangeEditInput}
          />
        ) : (
          <span>{history.history.title}</span>
        )}
        <div>{history.history.amount}</div>
        <div>{history.history.createdAt}</div>
        <div>
          <button onClick={deleteHandler}>🗑</button>
          {edited ? (
            <button onClick={onClickSubmitButton}>🆗</button>
          ) : (
            <button onClick={editHandler}>✏️</button>
          )}
        </div>
      </div>
    </>
  );
};
export default Item;
