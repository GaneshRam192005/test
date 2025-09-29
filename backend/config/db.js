import mysql from 'mysql2'
export const db = mysql.createConnection({
    host:"localhost",
    database:"cement",
    user:"root",
    password:"ganesh",

});
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected");
    }
}); 