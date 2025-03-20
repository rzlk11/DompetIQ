import React, { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    account: "DompetIQ",
    date: "2025-04-22",
    time: "23:59",
    recipient: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    alert("Data berhasil disimpan!");
  };

  const handleCancel = () => {
    alert("Aksi dibatalkan.");
  };

  return (
    <div className="expense-form">
      <h2>Pengeluaran Baru</h2>
      <form>
        <label>Kategori:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Pilih Kategori</option>
          <option value="Makanan">Makanan</option>
          <option value="Transportasi">Transportasi</option>
          <option value="Belanja">Belanja</option>
        </select>

        <label>Nilai:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Rp"
        />

        <label>Rekening:</label>
        <select name="account" value={formData.account} onChange={handleChange}>
          <option value="Dompet">Dompet</option>
          <option value="Bank">Bank</option>
        </select>

        <label>Tanggal:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label>Waktu:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <label>Kepada (Opsional):</label>
        <input
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />

        <label>Catatan (Opsional):</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>

        <div className="buttons">
          <button type="button" onClick={handleSave}>
            Simpan
          </button>
          <button type="button" onClick={handleCancel}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
