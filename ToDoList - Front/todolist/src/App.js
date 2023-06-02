import React from "react";
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";

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

  // One Way Data - React hooks
  const [items, setItems] = React.useState([]);

  const [showAddItem, setShowAddItem] = React.useState(false);
  const [showEditItem, setShowEditItem] = React.useState(false);

  const [editingText, setEditingText] = React.useState("");

  // Fetch data from API, will fire only on first rander
  React.useEffect(() => getAllItems(), []);

  // Add Item:
  const addItem = (text) => {
    axios.post(baseURL + "/to-do-item/", text).then((response) => {
      getAllItems();
    });
  };

  // Get Single Item - currently not in use:
  const getItem = (ID) => {
    axios.get(baseURL + "/to-do-item/single", ID).then((response) => {});
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

  // Remove an Item:
  const deleteItem = (ID) => {
    const IDObject = {
      _id: ID,
    };
    axios
      .delete(baseURL + "/to-do-item", { data: IDObject })
      .then((response) => getAllItems())
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  // Reveal edit menu:
  const revealEditItem = (ID, text) => {
    setShowEditItem(true);
    const object = {
      _id: ID,
      text,
    };
    setEditingText(object);
    console.log("in revealEditItem func FRONT, object is :", object);
  };

  // Edit an Item:
  const editItem = (textObject) => {
    const updateObject = {
      _id: editingText._id,
      text: textObject.text,
    };

    axios
      .post(baseURL + "/to-do-item/edit", updateObject)
      .then((response) => {
        setShowEditItem(false);
        getAllItems();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  // JSX syntax
  return (
    <div className="container">
      <Header
        title={HeaderText}
        onReveal={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem}
      />
      {showAddItem && <AddItem onAdd={addItem} />}
      {showEditItem && (
        <EditItem
          onEdit={(textObject) => editItem(textObject)}
          currentText={editingText.text}
          closeEditMenu={() => setShowEditItem(false)}
        />
      )}
      <List
        items={items}
        onCheck={(ID, asCompleted) => checkItem(ID, asCompleted)}
        onDelete={(ID) => deleteItem(ID)}
        onEdit={(ID, text) => {
          revealEditItem(ID, text);
        }}
      />
    </div>
  );
};

export default App;
