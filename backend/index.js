import  express from 'express';
import userRoutes from './routes/userRoutes.js'
import { createUserDb } from './models/user.js';
import cors from 'cors'
const app = express();
app.use(cors());
const PORT =3000;
app.use(express.json());
createUserDb()
app.use('/users',userRoutes);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
