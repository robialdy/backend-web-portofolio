import express from "express";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    meta: {
      status: 200,
      message: "Server is running!",
    },
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
