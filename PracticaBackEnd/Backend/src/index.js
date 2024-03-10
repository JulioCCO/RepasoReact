// encargado de iniciar la app

import app from './app.js'; 
import { connectDB } from "./db.js";


connectDB();
const port = 4000;

app.listen(port);
console.log(`Sever on port, ${port}`);