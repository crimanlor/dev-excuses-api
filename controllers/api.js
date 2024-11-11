const Excuse = require("../models/excuse.model");


const getExcuse = async (req, res) => {
     try {
        const excuses = await Excuse.find();
        res.json({ excuses });
    } catch (error) {
        console.error("Error fetching excuses:", error);
        res.status(500).json({ message: "Error fetching excuses" });
    }
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