// src/components/TransactionForm.jsx
import React, { useState } from 'react';
import { Button, TextField, MenuItem } from '@mui/material';

const categories = ["BPJS Kesehatan", "Pembayaran Online", "Hiburan", "Bahan Bakar", "Makan di Luar", "Teknologi", "Hadiah", "Gaji", "Buku / Majalah", "Sepatu, Pakaian"];

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    date: '',
    amount: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save the data)
    console.log(formData);
    setFormData({ name: '', category: '', date: '', amount: '', paymentMethod: '' });
  };

  return (
    <div className="p-4 border-t">
      <h2 className="text-lg font-bold mb-2">Saring</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nama"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          required
          className="mb-2"
        />
        <TextField
          fullWidth
          select
          label="Kategori"
          name="category"
          value={formData.category}
          onChange={handleChange}
          variant="outlined"
          required
          className="mb-2"
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Tanggal"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          variant="outlined"
          required
          className="mb-2"
        />
        <TextField
          fullWidth
          label="Jumlah"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          variant="outlined"
          required
          className="mb-2"
        />
        <TextField
          fullWidth
          label="Metode Pembayaran"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          variant="outlined"
          required
          className="mb-2"
        />

        <Button type="submit" variant="contained" color="primary">Tambah Transaksi</Button>
      </form>
    </div>
  );
};

export default TransactionForm;

