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
  // const { userID } = req.query;
  // req.body
  // req.query
  // req.params

  // userID
  //   ? console.log("UserID =" + userID)
  //   : console.log("No userID was specified");
  getAllItems()
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Getting all items failed ${err} `);
    });
});

// Add New Item:
router.post("/", (req, res) => {
  const { text } = req.body;

  addToDoListItem(text)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Adding new item failed ${err} `);
    });
});

// Delete an Item:
router.delete("/", (req, res) => {
  const { ID } = req.body;

  removeItem(ID)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Deleting item failed ${err} `);
    });
});

// Tick Item:
router.post("/tick", (req, res) => {
  const { ID } = req.body;

  tickItem(ID)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Ticking item failed ${err} `);
    });
});

export default router;
