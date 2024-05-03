import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import { addRoommate, getRoommates} from "../controllers/roommates.js";
import { addGasto, getGastos, editGasto} from "../controllers/gastos.js";

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

//rutas botones y listas
router.post("/roommate", addRoommate );//✅
router.get("/roommates", getRoommates);//✅

//gastos
router.get("/gastos",getGastos);//✅
router.post("/gasto",addGasto);//✅
router.put("/gasto", editGasto);
// router.delete("/gasto",deleteGasto)

export default router;