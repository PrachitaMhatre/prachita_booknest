import express from "express";
//import bookController from "../controller/book.controller.js";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

export default router;
