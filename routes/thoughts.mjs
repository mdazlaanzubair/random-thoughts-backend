import express from "express";
import {
  index,
  create,
  like,
  update,
  destroy,
} from "../controllers/thoughts.mjs";
const thought_router = express.Router();

// creating routes
thought_router.get("/index", index);
thought_router.post("/create", create);
thought_router.post("/like/:id", like);
thought_router.put("/update/:id", update);
thought_router.delete("/delete/:id", destroy);

// returning routes
export default thought_router;
