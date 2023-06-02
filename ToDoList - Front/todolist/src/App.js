import React from "react";
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";

const backEndPort = 3001;
const baseURL = `http://localhost:${backEndPort}`;

let HeaderText = "My To Do List App";

const App = () => {
  // Get all items
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

  // Get Single Item - currently not in use:
  const getItem = (ID) => {
    axios.get(baseURL + "/to-do-item/single", ID).then((response) => {
      console.log(`Got requested single item : ${response.data}`);
    });
  };

  // Check Item:
  const checkItem = (ID, asCompleted) => {
    let endPoint = "untick";
    const IDObject = {
      _id: ID,
    };
    // if item was completed >> Change endPoint Target to tick
    if (asCompleted) endPoint = "tick";

    axios
      .post(baseURL + "/to-do-item/" + endPoint, IDObject)
      .then((response) => {
        getAllItems();
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

      <List
        items={items}
        onCheck={(ID, asCompleted) => checkItem(ID, asCompleted)}
      />
    </div>
  );
};

export default App;
