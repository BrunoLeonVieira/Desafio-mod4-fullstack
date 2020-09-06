import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { gradeRouter } from "./routes/gradeRouter.js";

import { db } from "./models/index.js";
import { logger } from "./config/logger.js";

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Banco conectado com sucesso!");
  } catch (error) {
    logger.error("Erro de conexão: " + error);
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use(gradeRouter);

app.get("/", (req, res) => {
  res.send("API em execucao");
});

app.listen(process.env.PORT || 8081, () => {});
