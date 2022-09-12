import express from "express";
import user from "../controllers/user.mjs";
const user_router = express.Router();

// creating routes
user_router.get("/user", user);

// returning routes
export default user_router;
