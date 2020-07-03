module.exports = {
  getParty: (req, res) => {
    const db = req.app.get("db");
    db.get_party()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(() => {
        res.status(500).send("error on getParty function");
      });
  },
  getCharacter: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_character([id])
      .then((data) => {
        res.status(200).send(data[0]);
      })
      .catch(() => res.sendStatus(500));
  },
  addCharacter: (req, res) => {
    const db = req.app.get("db");
    const { name, charClass, level } = req.body;
  },
  editCharacter: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
  },
  deleteCharacter: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
  },
};
