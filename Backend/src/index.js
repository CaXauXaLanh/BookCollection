import express from "express";
const app = express();
import initAPIRouter from "./routes/api";


require("dotenv").config();
const port = process.env.PORT;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static("./src/public"))

initAPIRouter(app);

app.listen(port, () => {
    console.log(`http:localhost:${port}`);
});
