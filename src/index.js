import express, { json } from "express";
import cors from "cors";

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(json());

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
