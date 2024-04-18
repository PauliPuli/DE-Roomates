import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import { apiRandom } from "../controllers/controllers.js";

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/random", apiRandom)

export default router;