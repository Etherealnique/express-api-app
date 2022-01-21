import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 7000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to Dominique's API!"));
app.all("*", (req, res) => res.send("Route doesn't exist."));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
