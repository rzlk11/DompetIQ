import Rekening from "../models/RekeningModel.js";

// Get all rekenings
export const getRekenings = async (req, res) => {
  try {
    const rekenings = await Rekening.findAll();
    res.status(200).json(rekenings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single rekening by ID
export const getRekeningById = async (req, res) => {
  try {
    const rekening = await Rekening.findByPk(req.params.id);
    if (!rekening) {
      return res.status(404).json({ message: "Rekening not found" });
    }
    res.status(200).json(rekening);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new rekening
export const createRekening = async (req, res) => {
  const { name, type, balance, notes } = req.body;
  try {
    const newRekening = await Rekening.create({
      name,
      type,
      balance,
      notes,
    });
    res.status(201).json(newRekening);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing rekening
export const updateRekening = async (req, res) => {
  const { name, type, balance, notes } = req.body;
  try {
    const rekening = await Rekening.findByPk(req.params.id);
    if (!rekening) {
      return res.status(404).json({ message: "Rekening not found" });
    }
    rekening.name = name;
    rekening.type = type;
    rekening.balance = balance;
    rekening.notes = notes;
    await rekening.save();
    res.status(200).json(rekening);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a rekening
export const deleteRekening = async (req, res) => {
  try {
    const rekening = await Rekening.findByPk(req.params.id);
    if (!rekening) {
      return res.status(404).json({ message: "Rekening not found" });
    }
    await rekening.destroy();
    res.status(200).json({ message: "Rekening deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};