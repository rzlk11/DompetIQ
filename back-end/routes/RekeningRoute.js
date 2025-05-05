import express from "express";
import {
  getRekening,
  getRekeningById,
  createRekening,
  updateRekening,
  deleteRekening,
} from "../controllers/RekeningController.js";

const router = express.Router();

router.get("/rekening", getRekening); // Get all rekenings
router.get("/rekening/:id", getRekeningById); // Get a single rekening by ID
router.post("/rekening", createRekening); // Create a new rekening
router.put("/rekening/:id", updateRekening); // Update an existing rekening
router.delete("/rekening/:id", deleteRekening); // Delete a rekening

export default router;