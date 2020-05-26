var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "Database.db"
var columns = 3;
var lines = 0;



let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
    console.log('Connected to ApBC table.')
        db.run(`CREATE TABLE apbc (
            id INTEGER PRIMARY KEY,
            name TEXT,
            image TEXT,
            sound TEXT
            )`,(err) => {
        if (err) {
            console.log("Table already created");
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO apbc (name, image, sound) VALUES (?,?,?)'
         


// save all
var names  = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ]
var images = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ]
var sounds = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ]


// save animals
var animals = ['anka', 'geting', 'gris' , 'groda', 'hund', 'katt', 'ko', 'lamm', 'orm', 'panda', 'tiger', 'zebra']
for (let i = 0; i < animals.length; i++) {
    images[i] = animals[i] + '.png';
    names[i] = animals[i];
    sounds[i] = animals[i] + '.mp3'
}

for (let i = 0; i < names.length; i++) {
    db.run(insert, [names[i],images[i],sounds[i]])
    lines += 1
    }

    console.log("inserted [" + columns + '] columns and [' + lines + '] lines to table Apbc.')   

            }
        }
    )}
})
module.exports = db