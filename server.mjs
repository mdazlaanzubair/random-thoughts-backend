import express from "express";
import cors from "cors";
import thought_router from "./routes/thoughts.mjs";
import user_router from "./routes/user.mjs";

// initializing express app
const app = express();

// middleware(s)
app.use(cors());
app.use(express.json());
app.use([user_router, thought_router]);

const port_num = process.env.PORT || 3000;
app.listen(port_num, function () {
  console.log(`listening on ${port_num}`);
});
