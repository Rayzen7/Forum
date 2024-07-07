import { register, login } from "../Controllers/adminController.js";
import express from "express";

const AdminRouter = express.Router();

AdminRouter.post('/Adminregister', register);
AdminRouter.post('/Adminlogin', login);

export default AdminRouter;
