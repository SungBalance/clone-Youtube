import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { userRouter } from "./router"; // export에 default 옵션 없으면

const app = express();

const handleHome = (req, res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send("You are on my profile"); // 마지막 함수라서 next 없음

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome); // get(beginning, middleware, start)

app.get("/profile", handleProfile);

app.use("/user", userRouter); // use: 누군가 /user에 접속하면, userRouter 사용

export default app; // 다른 js 파일에서 모듈을 import 하면 app object를 return