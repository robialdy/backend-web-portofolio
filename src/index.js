import express from "express";
import cors from "cors";
import router from "./routes/api.js";
import connect from "./utils/database.js";
import bodyParser from "body-parser";


async function init() {
    try {
        const result = await connect();
        console.log("database status: ", result);

        const PORT = 3000;
        const app = express();

        app.use(cors());
        app.use(bodyParser.json())

        app.get("/", (req, res) => {
          res.status(200).json({
            meta: {
              status: 200,
              message: "Server is running!",
            },
            data: null,
          });
        });

        app.use("/api", router);

        app.listen(PORT, () => {
          console.log(`Server is running on port: http://localhost:${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
}


init()
