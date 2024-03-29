import express, { Request, Response, urlencoded } from "express";
import cors from "cors";
import 'dotenv/config'

const app = express();
const port = process.env.NODE_APP_PORT;

app.use(express.json());
app.use(urlencoded({ extended: true, limit: "5mb" }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.use(function (req, res, next) {
  res.contentType('application/json');
  next();
});

app.get("/", (req: Request, res: Response) =>
  res.send("Hi Luca, server is started!")
);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
