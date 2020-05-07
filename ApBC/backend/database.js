var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "Database.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to Bok table.')
        db.run(`CREATE TABLE bok (
            bokId INTEGER PRIMARY KEY,
            bokTitel TEXT,
            bokForfattare TEXT,
            bokIsbn TEXT,
            bokPris REAL
            )`,(err) => {
        if (err) {            
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO bok (bokTitel, bokForfattare, bokIsbn, bokPris) VALUES (?,?,?,?)'
            db.run(insert, ["Sagan om Ringen","J.R.R Tolkien","12345-6",120])
        }
    })  

    console.log('Connected to Questions table.')
        db.run(`CREATE TABLE questions (
            questionId INTEGER PRIMARY KEY,
            question TEXT,
            answer TEXT
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO questions (question, answer) VALUES (?,?)'

            for (i = 1; i <= 10; i++) {
                db.run(insert, ["question" + i, "answer" + i])
              }
        }
    })  
    }
})
module.exports = db

/*

const DBSOURCE2 = "questions.db"
let db2 = new sqlite3.Database(DBSOURCE2, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the Questions database.')
        db.run(`CREATE TABLE questions (
            questionId INTEGER PRIMARY KEY,
            question TEXT
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO questions (question) VALUES (?)'
            db.run(insert, ["vad är de här för djur?"])
        }
    })  
    }
})



module.exports = db2

*/