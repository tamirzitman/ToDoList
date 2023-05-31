import { promises as fs } from "fs";
import ToDoListItem from "../model/to-do-list-item.js";

// Get all items
export async function getAllItems() {
  return await ToDoListItem.find({});
}

// Get one item
export async function getOneItem(ID) {
  return await ToDoListItem.find({ _id: ID });
}

// Add item
export async function addItem(text) {
  return await ToDoListItem.insertMany({ text });
}

// Remove item by ID
export async function removeItem(ID) {
  return await ToDoListItem.deleteOne({ _id: ID });
}

// Tick item as completed
export async function tickItem(ID) {
  return await ToDoListItem.findOneAndUpdate({ _id: ID }, [
    { $set: { completed: true } },
  ]);
}

// UnTick item as completed
export async function untickItem(ID) {
  return await ToDoListItem.findOneAndUpdate({ _id: ID }, [
    { $set: { completed: { $not: false } } },
  ]);
}
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

async function updateListObject(todoListObject, filePath) {
  // stringify readable JSON Object
  const stringifiedJSON = JSON.stringify(todoListObject);

  await fs.writeFile(filePath, stringifiedJSON);
}
