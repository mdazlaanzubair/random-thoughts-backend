import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port_num = process.env.PORT || 3000;
app.listen(port_num, function () {
  console.log(`listening on ${port_num}`);
});
