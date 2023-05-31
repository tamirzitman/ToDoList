import { promises as fs } from "fs";
import ToDoListItem from "../model/to-do-list-item.js";

const jsonPath = "./reposetories/to-do-items-mock.json";

// Get all items
export const getAllItems = () => getListObject();

// Add item
export async function addToDoListItem(text) {
  const list = await getListObject();
  const newItem = {
    ID: getNextID(list),
    text,
    completed: false,
    // creation: Date.now()
  };
  list.push(newItem);

  await updateListObject(list, jsonPath);
  return newItem;
}
//**************************************//

// Remove item by ID
export async function removeItem(ID) {
  const list = await getListObject();

  const removeInd = getItemIndexByID(ID, list);

  list.splice(removeInd, 1);

  await updateListObject(list, jsonPath);

  return `ID ${ID} Sucessfully removed`;
}
//**************************************//

// Tick item as completed
export async function tickItem(ID) {
  const newList = await getListObject();

  // Locate the todo item in the array and set its completed property to the opposite.
  const index = newList.findIndex((item) => item.ID === Number(ID));
  newList[index].completed = !newList[index].completed;

  await updateListObject(newList, jsonPath);
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

function getItemIndexByID(ID, JsonObject) {
  const itemIndex = JsonObject.findIndex((object) => {
    return object.ID === ID;
  });
  if (itemIndex > 0) {
    return itemIndex;
  } else {
    throw "Could not get the index for the selected ID";
  }
}

async function getListObject() {
  const x = await ToDoListItem.find({});
  console.log(x);
  return x;
  // const rawData = await fs.readFile(jsonPath, "UTF8");
  // try {
  //   const parsedObject = JSON.parse(rawData);
  //   return parsedObject;
  // } catch (error) {
  //   throw new Error("Could not parse JSON");
  // }
}

async function updateListObject(todoListObject, filePath) {
  // stringify readable JSON Object
  const stringifiedJSON = JSON.stringify(todoListObject);

  await fs.writeFile(filePath, stringifiedJSON);
}
