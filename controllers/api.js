const Excuse = require("../models/excuse.model");


const getExcuse = async (req, res) => {
    const excuses = await Excuse.find()
    const excuse = excuses[Math.floor(Math.random() * excuses.length)];
    res.json({ excuse });
}

const postNewExcuse = async (req, res) => {
  const excuse = {
    value: "The server's down again. Must be a deep philosophical issue with the cables.",
    category: "network",
    bsLevel: 72
  }
  await Excuse.create(excuse)
  res.json({ excuse });
}

module.exports = { getExcuse, postNewExcuse };