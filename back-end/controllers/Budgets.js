import Budgets from "../models/BudgetModel.js";

export const createBudget = async (req, res) => {
    try {
        const budget = await Budgets.create(req.body);
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getBudgets = async (req, res) => {
    try {
        const budgets = await Budgets.findAll();
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getBudgetById = async (req, res) => {
    try {
        const { id } = req.params;
        const budget = await Budgets.findOne({
            where: {
                id: id
            }
        });
        if (budget) {
            res.status(200).json(budget);
        } else {
            res.status(404).json({ error: `Budget with id: ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateBudget = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Budgets.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedBudget = await Budgets.findOne({ where: { id: id } });
            res.status(200).json(updatedBudget);
        } else {
            res.status(404).json({ error: `Budget with id: ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteBudget = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Budgets.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.status(204).send(`Budget with id: ${id} deleted`);
        } else {
            res.status(404).json({ error: `Budget with id: ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}