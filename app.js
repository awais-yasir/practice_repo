import Express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import authRouter from "./routes/auth.router.js";

const app = Express();

app.use(bodyParser.json());
app.use(helmet());

app.use('/auth', authRouter)


export const startServer = async (PORT) => {
  let server;
  return new Promise((resolve, reject) => { 
    server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      resolve(server);
    });
  })
}