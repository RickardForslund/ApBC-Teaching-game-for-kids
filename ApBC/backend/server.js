// Imports
const express = require("express")
const app = express()
const cors = require('cors')
const db = require("./database.js")
const bodyParser = require("body-parser");
const port = 3000

// uses
app.use(
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json()
  )


// Start server
app.listen(port, () => {
    console.log(`Server is now running on port:${port}`)
});



// Get all
app.get("/api/apbc", (req, res, next) => {
    var sql = "select * from apbc"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "apbc":rows
        })
      });
});

// Get by id
app.get("/api/apbc/:id", (req, res, next) => {
    var sql = "select * from apbc where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "apbc":row
        })
      });
});