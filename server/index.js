require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller"),
  app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

//* massive goes below



//* Endpoints go below

app.get("/api/party", ctrl.getParty);
app.get("/api/character/:id", ctrl.getCharacter);
app.post("/api/character", ctrl.addCharacter);
app.put("/api/character/:id", ctrl.editCharacter);
app.delete("/api/character/:id", ctrl.deleteCharacter);

const port = SERVER_PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
