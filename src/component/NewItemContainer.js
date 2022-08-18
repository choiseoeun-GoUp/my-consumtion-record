import React, { useState } from "react";

const NewItemContainer = () => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      createdAt: new Date(enteredDate),
      type: "income",
    };

    fetch("http://localhost:3001/historys/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredData),
    });

    console.log(enteredData);
    // 입력창 초기화
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
  return (
    <>
      <form onSubmit={submitHandler} className="submitform">
        <div>
          <h3>날짜</h3>
          <input type="date" onChange={dateChangeHandler} />
        </div>
        <div>
          <h3>제목</h3>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        {/* <div>
          <label>수입</label>
          <input type="radio" />
        </div>
        <div>
          <label>지출</label>
          <input type="radio" />
        </div> */}
        <div>
          <h3>금액</h3>
          <input type="text" onChange={amountChangeHandler} />
        </div>
        <div>
          <button type="submit" value="submit">
            등록
          </button>
          <button>취소</button>
        </div>
      </form>
    </>
  );
};

export default NewItemContainer;
