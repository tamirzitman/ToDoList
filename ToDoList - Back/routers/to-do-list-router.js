import { Router } from "express";
import {
  addToDoListItem,
  getAllItems,
  removeItem,
  tickItem,
} from "../reposetories/to-do-list-repo.js";

const router = Router();

// Get All Items:
router.get("/", (req, res) => {
  const { userID } = req.query;
  // req.body
  // req.query
  // req.params

  userID
    ? console.log("UserID =" + userID)
    : console.log("No userID was specified");
  res.send(getAllItems());
});

// Add New Item:
router.post("/", (req, res) => {
  const { text } = req.body;

  res.send(addToDoListItem(text));
});

// Delete an Item:
router.delete("/", (req, res) => {
  const { ID } = req.body;

  res.send(removeItem(ID));
});

// Tick Item:
router.post("/tick", (req, res) => {
  const { ID } = req.body;

  res.send(tickItem(ID));
});

export default router;
