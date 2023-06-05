import ToDoListItem from "../model/to-do-list-item.js";

// Get all items
export function getAllItems() {
  return ToDoListItem.find({});
}

// Get one item
export async function getSingleItem(ID) {
  return await ToDoListItem.findById(ID);
}

// Add item
export async function addItem(text) {
  return await ToDoListItem.insertMany({ text });
}

// Remove item by ID
export async function removeItem(ID) {
  return await ToDoListItem.findByIdAndDelete(ID);
}

// Tick item as completed
export async function editItem(ID, text) {
  return await ToDoListItem.findOneAndUpdate({ _id: ID }, [{ $set: { text } }]);
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
