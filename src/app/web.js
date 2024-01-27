import express from "express";
import { publicRouter } from "../route/public_api";
import { errorMiddleware } from "../middleware/error_middleware";

export const web = express();
web.use(express.json());


web.use(publicRouter);
web.use(errorMiddleware);