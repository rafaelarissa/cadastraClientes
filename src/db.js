import dotenv from "dotenv";
import pkg, { Pool } from "pg";
dotenv.config();

const { Pool } = pkg;
const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default connection;
