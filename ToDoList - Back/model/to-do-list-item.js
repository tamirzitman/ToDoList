import mongoose, { Schema } from "mongoose";

const ToDoListItem = new Schema(
  {
    text: { type: String },
    completed: { type: Boolean, default: false },
  },
  {
    collection: "todo-list-items",
  }
);

export default mongoose.model("todo-list-item", ToDoListItem);
