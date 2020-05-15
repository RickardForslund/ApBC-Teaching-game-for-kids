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

    console.log('Connected to ApBC table.')
        db.run(`CREATE TABLE apbc (
            id INTEGER PRIMARY KEY,
            name TEXT,
            image TEXT,
            sound TEXT
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO apbc (name, image, sound) VALUES (?,?,?)'
            
let img1 = 'anka.png'
let img2 = 'geting.png'
let img3 = 'gris.png'
let img4 = 'groda.png'
let img5 = 'hund.png'
let img6 = 'katt.png'
let img7 = 'ko.png'
let img8 = 'lamm.png'
let img9 = 'orm.png'
let img10 = 'panda.png'
let img11 = 'tiger.png'
let img12 = 'zebra.png'

            let names = ['anka', 'geting', 'gris', 'groda', 'hund', 'katt', 'ko', 'lamm', 'orm', 'panda', 'tiger', 'zebra' ]
            let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 ]
            let sounds = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null' ]

            for (let i = 0; i < names.length; i++) {
                db.run(insert, [names[i],images[i],sounds[i]])
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