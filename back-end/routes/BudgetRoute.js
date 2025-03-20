import express from 'express';
import {
    createBudget,
    getBudgets,
    getBudgetById,
    updateBudget,
    deleteBudget
} from '../controllers/Budgets.js';

const router = express.Router();

router.get('/budgets', getBudgets);
router.get('/budgets/:id', getBudgetById);
router.post('/budgets', createBudget);
router.patch('/budgets/:id', updateBudget);
router.delete('/budgets/:id', deleteBudget);

export default router;