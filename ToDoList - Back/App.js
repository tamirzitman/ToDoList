import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import todoListRouter from "./routers/to-do-list-router.js";
import { mongooseInitiator } from "./mongo-util.js";

const server = "todolist.irve6xz.mongodb.net";
const db = "to-do-list";
const { MONGO_USERNAME, MONGO_PASS } = process.env;

mongooseInitiator(server, db, MONGO_USERNAME, MONGO_PASS);

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/to-do-item", todoListRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
