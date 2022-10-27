var express = require('express');
var router = express.Router();

/* GET all data */
router.get('/enviro_data', function(req, res, next) {
  db("SELECT * FROM enviro_data;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

/* GET data by ZIP */
router.get("/:zip", async function(req, res) {
  const sql = `SELECT * FROM enviro_data WHERE zip = ${req.params.zip}`;

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
});

module.exports = router;
