const mysql = require("mysql2");
let querryData = [];

const connection = mysql.createConnection({
  host: "darkmo7i.beget.tech",
  user: "darkmo7i_base",
  database: "darkmo7i_base",
  password: "kEv&Ac5b"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 connection.execute("SELECT * FROM testTable",
 function(err, results, fields) {
   console.log(err);
    querryData = results;
   console.log(querryData); // собственно данные
//    console.log(fields); 
});

connection.end(function(err) {
    if (err) {
      return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
    total += Number(data) || 0;
});