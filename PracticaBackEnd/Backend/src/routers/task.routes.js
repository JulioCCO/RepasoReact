import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, deleteTask, updateTask} from "../controllers/task.controller.js";
const router = Router()

router.get('/task',authRequired, getTasks) // get all
router.get('/task/:id',authRequired, getTask) // get one
router.post('/task',authRequired, createTask) // create new one
router.delete('/task/:id',authRequired, deleteTask) // delete one
router.put('/task/:id',authRequired, updateTask) // update one task


export default router;