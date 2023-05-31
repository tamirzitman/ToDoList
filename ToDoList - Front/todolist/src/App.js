import React from "react";
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";

const backEndPort = 3001;
const baseURL = `http://localhost:${backEndPort}`;

let HeaderText = "My To Do List App";

const App = () => {
  function getAllItems() {
    axios.get(baseURL + "/to-do-item").then((response) => {
      setItems(response.data);
    });
  }

  // One Way Data
  const [items, setItems] = React.useState([]);

  // Fetch data from API
  React.useEffect(() => getAllItems(), []);

  // Add Item:
  const addItem = (text) => {
    axios.post(baseURL + "/to-do-item/", text).then((response) => {
      console.log(`added : ${response}`);
      getAllItems();
    });
  };

  // Check Item:
  const checkItem = (ID) => {
    const IDObject = {
      ID,
    };
    axios
      .post(baseURL + "/to-do-item/tick", IDObject)
      .then((response) => {
        console.log("check", ID);
        getAllItems();
        console.log(response);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // JSX syntax
  return (
    <div className="container">
      <Header title={HeaderText} />
      <AddItem onAdd={addItem} />
      <br></br>
      <List items={items} onCheck={checkItem} />
    </div>
  );
};

export default App;
