import axios from "axios";
import React from "react";
import "./Component.css"; // Import the CSS file

const backEndPort = 3001;
const baseURL = "http://localhost:" + backEndPort;

export function List() {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL + "/to-do-item").then((response) => {
      setItems(response.data);
    });
  }, []);

  console.log("items", items);
  if (!items || items.length === 0) return <div>loading...</div>;

  return (
    <div>
      <h1>Tasks To Complete:</h1>
      {items.map((item) => (!item.completed ? <div>{item.text}</div> : ""))}

      <h1>Completed Tasks</h1>
      {items.map((item) => (item.completed ? <div>{item.text}</div> : ""))}
    </div>

    // <div>
    //   <div>{items[0].text}</div>
    //   <div>{items[1].text}</div>
    // </div>
  );
}
