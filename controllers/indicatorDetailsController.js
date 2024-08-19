const db = require("../model/helper");

const getAllIndicatorDetails = async (req, res) => {
  db("SELECT * FROM indicator_details;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

const getIndicatorDetailsById = async (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM indicator_details WHERE id = "${id}"`;

  try {
    let result = await db(sql); // run the sql command: look for data by zip
    if (result.data.length === 0) {
      // if the resulting array is empty, zip doesn't exist: return error
      res.status(404).send({ error: "Indicator not found, please try again." });
    } else {
      res.status(200).send(result.data[0]); // send successful status and data to client
    }
  } catch (error) {
    // else send error if fails
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllIndicatorDetails,
  getIndicatorDetailsById,
};
