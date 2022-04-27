import express, { Request, Response } from "express";
import router from "./routes";
import { morganMiddleware } from "./utils/logger";
// ==== 새로 추가
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger/swagger";
// =========

const app: express.Application = express();

app.use(morganMiddleware);

app.get("/welcome", (req: Request, res: Response) => {
  res.send("welcome!");
});

// Swagger 연결 === 새로 추가
const specs = swaggerJsdoc(swaggerOptions);
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
// ========

// dev route
app.use("/api", router);

export default app;
