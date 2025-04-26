import express from "express";
import {
  getRekening,
  getRekeningById,
  createRekening,
  updateRekening,
  deleteRekening,
} from "../controllers/Rekening.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/rekening", verifyUser, getRekening);
router.get("/rekening/:id", verifyUser, getRekeningById);
router.post("/rekening", verifyUser, createRekening);
router.patch("/rekening/:id", verifyUser,  updateRekening);
router.delete("/rekening/:id", verifyUser, deleteRekening);

export default router;
