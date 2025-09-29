import { db } from "../config/db.js"
 export const  createUserDb = ()=>{
    const query = `
    CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
     `
     db.query(query,(err)=>{
        if(err) console.log("Error In Creating User Table");
        else{
            console.log("User Table Created ");
            
        }
        
     })
}