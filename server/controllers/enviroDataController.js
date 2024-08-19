const db = require("../model/helper");

const getAllEnviroData = (req, res) => {
  db("SELECT * FROM enviro_data;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

const getByZip = async (req, res) => {
  const zip = req.params.zip;
  const sql = `SELECT * FROM enviro_data WHERE zip = ${zip}`;

  try {
    let result = await db(sql); // run the sql command: look for data by zip
    if (result.data.length === 0) {
      // if the resulting array is empty, zip doesn't exist: return error
      res.status(404).send({ error: "ZIP code not found, please try again." });
    } else {
      res.status(200).send(result.data[0]); // send successful status and data to client
    }
  } catch (error) {
    // else send error if fails
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getByZip,
  getAllEnviroData,
};
