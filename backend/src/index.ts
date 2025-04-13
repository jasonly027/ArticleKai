import express from "express";
import cors from "cors";
import generate from "./api/generate";
import limiter from "./limiter";

const app = express();
const PORT = 8080;

app.use(limiter);
app.use(cors());
app.use(express.text());

app.use("/api/generate", generate);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
