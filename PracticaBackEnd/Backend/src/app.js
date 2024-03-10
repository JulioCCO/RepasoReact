
import  express  from "express";
import morgan from 'morgan';
import authRoutes from "./routers/auth.routes.js";
import taskRoutes from "./routers/task.routes.js";
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',taskRoutes);

export default app;




