import { db } from "../config/db.js";

export const signup = (req,res)=>{
    const {name,email,password}  = req.body;
   const query = "INSERT INTO  users (name,email,password) VALUES(?,?,?)";
   db.query(query,[name,email,password],(err,result)=>{
    if(err)    return res.status(500).json({"message":err})
     return res.status(200).json({"message":true,userId:result.insertId})
   })
  
  

}

export const login =(req,res)=>{
    const {name,email,password}  = req.body;
    const query ="SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) {
                return res.status(400).json({ message: "Invalid email or password" });
            }
             const user = results[0];
   if(user.password !=password) 
   {
    return res.status(400).json({ message: "Invalid email or password" });
   }
   return res.status(201).json({message:"Login succesfull",userId:user.id ,name:user.name})
        })

}