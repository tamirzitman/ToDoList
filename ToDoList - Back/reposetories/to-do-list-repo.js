import ToDoListItem from "../model/to-do-list-item.js";

// Get all items
export async function getAllItems() {
  return await ToDoListItem.find({});
}

// Get one item
export async function getSingleItem(ID) {
  const item = await ToDoListItem.find({ ID });
  if (item.length === 1) {
    return item[0];
  } else {
    throw "could not find single item to retrive";
  }
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
    { $set: { completed: false } },
  ]);
}
