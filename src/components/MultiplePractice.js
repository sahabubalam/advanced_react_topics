import { Button } from "bootstrap";
import React, { useState } from "react";
import AcceptMultiplePractice from "./AcceptMultiplePractice";

const MultiplePractice = () => {
  const [data, setData] = useState(1);
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Function ran in Child component");
    setData(data + 2);
  }

  const templates = {
    template1: {
      items: [1, 2],
    },
    template2: {
      items: [2, 3, 4],
    },
  };

  const people = [
    {
      name: "chris",
      pets: [
        { name: "bella", type: "dog" },
        { name: "cocoa", type: "dog" },
      ],
    },
    {
      name: "nick",
      pets: [
        { name: "hilo", type: "cat" },
        { name: "polly", type: "cat" },
      ],
    },
  ];

  return (
    <div style={{ marginTop: "10px" }}>
      <AcceptMultiplePractice
        handleClick={handleClick}
        count={count}
        data={data}
      />
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
      <br />

      {Object.keys(templates).map((template) => (
        <div key={template}>
          {template}
          {templates[template].items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      ))}

      <div>
        {people.map((item) => (
          <div>
            {item.name}
            {item.pets.map((p) => (
              <div style={{fontWeight:"bold"}}>{p.name}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiplePractice;
