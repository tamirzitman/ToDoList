import { Router } from "express";
import {
  addItem,
  getAllItems,
  getSingleItem,
  removeItem,
  tickItem,
  untickItem,
} from "../reposetories/to-do-list-repo.js";

const router = Router();

// Get All Items:
router.get("/", (req, res) => {
  // req.body
  // req.query
  // req.params

  getAllItems()
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Getting all items failed ${err} `);
    });
});

// Get a single Item:
router.get("/single", (req, res) => {
  const IDObject = req.body;
  console.log("IDObject in /get /single is:", IDObject);
  getSingleItem(IDObject)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Getting single item has failed ${err} `);
    });
});

// Add New Item:
router.post("/", (req, res) => {
  const { text } = req.body;

  addItem(text)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Adding new item failed ${err} `);
    });
});

// Delete an Item:
router.delete("/", (req, res) => {
  const ID = req.body._id;

  removeItem(ID)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Deleting item failed ${err} `);
    });
});

// Tick Item:
router.post("/tick", (req, res) => {
  const ID = req.body._id;

  tickItem(ID)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`Ticking item failed ${err} `);
    });
});

// UnTick Item:
router.post("/untick", (req, res) => {
  const ID = req.body._id;

  untickItem(ID)
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(500).send(err);
      console.error(`UnTicking item failed ${err} `);
    });
});

export default router;
