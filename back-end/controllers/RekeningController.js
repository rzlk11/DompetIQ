import Rekening from "../models/RekeningModel.js";
import { Sequelize, Op } from "sequelize";
import Users from "../models/UserModel.js";

export const getRekening = async (req, res) => {
  try {
    const where = {
      userId: req.userId,
    };

    const response = await Rekening.findAll({
      where,
      attributes: [
        "uuid",
        "balance",
        "account_number",
        [
          Sequelize.fn(
            "DATE_FORMAT",
            Sequelize.col("rekening.createdAt"),
            "%Y-%m-%d %H:%i:%s"
          ),
          "createdAt",
        ],
        [Sequelize.literal("user.username"), "user"],
      ],
      include: [
        {
          model: Users,
          attributes: [],
        },
      ],
      raw: true,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getRekeningById = async (req, res) => {
  try {
    const response = await Rekening.findOne({
      where: {
        userId: req.userId,
        uuid: req.params.id,
      },
      attributes: [
        "uuid",
        "balance",
        "account_number",
        [Sequelize.literal("user.username"), "user"],
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createRekening = async (req, res) => {
  const { balance, account_number } = req.body;
  try {
    await Rekening.create({
      balance: balance,
      account_number: account_number,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Rekening berhasil dibuat" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateRekening = async (req, res) => {
  const { balance, account_number } = req.body;

  const rekening = await Rekening.findOne({
    where: {
      userId: req.userId,
      uuid: req.params.id,
    },
  });
  if (!rekening) {
    return res.status(404).json({ msg: "Rekening tidak ditemukan" });
  }

  try {
    await Rekening.update(
      {
        balance: balance,
        account_number: account_number,
      },
      {
        where: {
          userId: req.userId,
          uuid: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: "Data berhasil diupdate" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteRekening = async (req, res) => {
  const rekening = await Rekening.findOne({
    where: {
      userId: req.userId,
      uuid: req.params.id,
    },
  });
  if (!rekening)
    return res.status(404).json({ msg: "Rekening tidak ditemukan" });
  try {
    await Rekening.destroy({
      where: {
        userId: req.userId,
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Rekening berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};