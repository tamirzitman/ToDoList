import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import todoListRouter from "./routers/to-do-list-router.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/to-do-item", todoListRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
