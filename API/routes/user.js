import express from "express";
import { register,login, profile } from "../controllers/user.js";
import { Authentication } from "../middlewares/auth.js";

const router = express.Router();

// user register
router.post('/register',register)
// user login
router.post('/login',login)
//Profile
router.get('/user',Authentication,profile)

export default router