module.exports = {
  getParty: (req, res) => {},
  getCharacter: (req, res) => {
    const { id } = req.params;
  },
  addCharacter: (req, res) => {
    const { name, charClass, level } = req.body;
  },
  editCharacter: (req, res) => {
    const { id } = req.params;
  },
  deleteCharacter: (req, res) => {
    const { id } = req.params;
  },
};
