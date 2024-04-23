import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import { addRoommate, verRoommies } from "../controllers/roommates.js";

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

//rutas botones y listas
router.post("/roommate", addRoommate );
router.get("/roommates", verRoommies);

//gastos
// router.get("/gastos",);
// router.post("/gasto",);
// router.put("/gasto",);
// router.delete("/gasto",)

export default router;