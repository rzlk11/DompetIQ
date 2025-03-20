import Transactions from "../models/TransactionModel.js";

export const getTransactions = async (req, res) => {
  try {
    const response = await Transactions.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const getTransactionById = async (req, res) => {
  try {
    const response = await Transactions.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const createTransaction = async (req, res) => {
  const { category_id, amount, is_scheduled } = req.body;
  const user_id = 1;
  try {
    await Transactions.create({
      userId: user_id,
      category_id: category_id,
      amount: amount,
      is_scheduled: is_scheduled,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateTransaction = async (req, res) => {
  const { category_id, amount, is_scheduled } = req.body;
  const transaction = await Transactions.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!transaction)
    return res.status(404).json({ msg: "Transaksi tidak ditemukan" });
  try {
    await Transactions.update(
      {
        category_id: category_id,
        amount: amount,
        is_scheduled: is_scheduled,
      },
      {
        where: {
          id: transaction.id,
        },
      }
    );
    res.status(200).json({ msg: "Data berhasil diupdate" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteTransaction = async (req, res) => {
  const transaction = await Transactions.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!transaction)
    return res.status(404).json({ msg: "Transaksi tidak ditemukan" });
  try {
    await Transactions.destroy({
      where: {
        id: transaction.id,
      },
    });
    res.status(200).json({ msg: "Transaksi berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
