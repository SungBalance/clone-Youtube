// router is a file contains many routes.

import express from "express";

export const userRouter = express.Router(); // export userRouter

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));