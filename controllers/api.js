

const getExcuse = async (req, res) => {
    const excuses = [
        "I was too busy debugging my code.",
        "I forgot to push the changes.",
        "The server went down.",
        "I had a meeting."
      ];
      const excuse = excuses[Math.floor(Math.random() * excuses.length)];
      res.json({ excuse });
}

module.exports = { getExcuse };