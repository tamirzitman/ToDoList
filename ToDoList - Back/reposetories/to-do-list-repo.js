import fs from "node:fs";

const jsonPath = "./reposetories/to-do-items-mock.json";

// Get all items
export function getAllItems() {
  const list = getListObject();
  if (testArray(list)) {
    return list;
  }
}
// Another Way - sugar Syntax
// export const getAllItems = () => list;
//**************************************//

// Add item
export function addToDoListItem(text) {
  const list = getListObject();
  const newItem = {
    ID: getNextID(list),
    text,
    completed: false,
    // creation: Date.now()
  };
  const newList = getListObject();
  newList.push(newItem);

  console.log(newList);
  updateListObject(newList, jsonPath);
  return newItem;
}
//**************************************//

// Remove item by ID
export function removeItem(ID) {
  const list = getListObject();

  const removeInd = getItemIndexByID(ID, list);
  console.log`the ID to be removed located on Index: ${removeInd}`;

  list.splice(removeInd, 1);

  console.log("new list is:" + JSON.stringify(list));

  updateListObject(list, jsonPath);

  return `ID ${ID} Sucessfully removed`;
}
//**************************************//

// Tick item as completed
export function tickItem(ID) {
  const newList = getListObject();

  // Locate the todo item in the array and set its completed property to the opposite.
  const index = newList.findIndex((item) => item.ID === Number(ID));
  newList[index].completed = !newList[index].completed;

  updateListObject(newList, jsonPath);
  if (newList[index].completed) {
    return `ID ${ID} Sucessfully ticked`;
  } else {
    return `ID ${ID} Sucessfully unticked`;
  }
}
//**************************************//
//**************************************//

// Helpers
function getNextID(toDoList) {
  let max = 0;
  for (const item of toDoList) {
    if (item.ID > max) max = item.ID;
  }
  return max + 1;
}

function testArray(toDoList) {
  return toDoList.length != 0;
}

function getItemIndexByID(ID, JsonObject) {
  const itemIndex = JsonObject.findIndex((object) => {
    return object.ID === ID;
  });
  console.log("itemIndex: " + itemIndex);
  if (itemIndex > 0) {
    return itemIndex;
  } else {
    throw "Could not get the index for the selected ID";
  }
}

function getItem(ID) {
  const list = getListObject();
  const item = list.find((item) => item.ID === ID);
  if (item) {
    console.log("item was found: " + JSON.stringify(item));
    return item;
  } else {
    throw new Error("Item not found.");
  }
}

function getListObject() {
  console.log("Reading JSON file");
  const rawData = fs.readFileSync(jsonPath, "UTF8");
  try {
    const parsedObject = JSON.parse(rawData);
    console.log("Parsed JSON:");
    console.log(parsedObject);
    return parsedObject;
  } catch (error) {
    console.log(error);
    throw new Error("Could not parse JSON");
  }
}

function updateListObject(todoListObject, filePath) {
  // stringify readable JSON Object
  console.log("Starting to update your JSON file");
  const stringifiedJSON = JSON.stringify(todoListObject);

  fs.writeFile(filePath, stringifiedJSON, (err, data) => {
    if (err) {
      throw err;
    } else {
      return data;
    }
  });
}
