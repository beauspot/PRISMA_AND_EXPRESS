import express, { Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import logger from "morgan";
import { StatusCodes } from "http-status-codes";

dotenv.config();
const Port = process.env.PORT || 4040;

// importing the routes.
import authorRoute from "./routes/authorRoutes";
import bookRoute from "./routes/bookRoutes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "Welcome to the user Service" });
});

app.use("/api", authorRoute);
app.use("/api", bookRoute);

const StartServer = async () => {
  app.listen(Port, () =>
    console.log(`Server listening on http:\//localhost:${Port}`)
  );
};

StartServer();
