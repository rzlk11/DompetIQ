import express from "express";
import {
  getRekenings,
  getRekeningById,
  createRekening,
  updateRekening,
  deleteRekening,
} from "../controllers/RekeningController.js";

const router = express.Router();

router.get("/rekenings", getRekenings); // Get all rekenings
router.get("/rekenings/:id", getRekeningById); // Get a single rekening by ID
router.post("/rekenings", createRekening); // Create a new rekening
router.put("/rekenings/:id", updateRekening); // Update an existing rekening
router.delete("/rekenings/:id", deleteRekening); // Delete a rekening

export default router;