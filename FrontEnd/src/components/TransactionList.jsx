// src/components/TransactionList.jsx
import React from 'react';

const transactions = [
    { name: "Winardi", category: "BPJS Kesehatan", date: "12/03/2023", amount: "Rp 3.600.000", paymentMethod: "Rekening Bank" },
    { name: "Jumiati", category: "Pembayaran Online", date: "12/03/2023", amount: "Rp 1.200.000", paymentMethod: "Dompet" },
    { name: "Widodo", category: "Hiburan", date: "11/03/2023", amount: "Rp 300.000", paymentMethod: "Rekening Bank" },
    { name: "Sumarni", category: "Bahan Bakar", date: "10/03/2023", amount: "Rp 260.000", paymentMethod: "Dompet" },
    { name: "Karmini", category: "Makan di Luar", date: "10/03/2023", amount: "Rp 150.000", paymentMethod: "Rekening Bank" },
    { name: "Markonah", category: "Teknologi", date: "10/03/2023", amount: "Rp 950.000", paymentMethod: "Rekening Bank" },
    { name: "Kartinah", category: "Hadiah", date: "09/03/2023", amount: "Rp 270.000", paymentMethod: "Dompet" },
    { name: "Tukiyem", category: "Gaji", date: "09/03/2023", amount: "Rp 12.000.000", paymentMethod: "Rekening Bank" },
    { name: "Winardi", category: "Buku / Majalah", date: "08/03/2023", amount: "Rp 64.000", paymentMethod: "Dompet" },
    { name: "Karmini", category: "Sepatu, Pakaian", date: "07/03/2023", amount: "Rp 450.000", paymentMethod: "Rekening Bank" },
];

const TransactionList = () => {
    return (
        <div className="container mx-auto p-2">
            <h1 className="text-2xl font-bold mb-2">Riwayat Transaksi</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 border-b">No</th>
                        <th className="py-2 border-b">Nama</th>
                        <th className="py-2 border-b">Kategori</th>
                        <th className="py-2 border-b">Tanggal</th>
                        <th className="py-2 border-b">Jumlah</th>
                        <th className="py-2 border-b">Metode Pembayaran</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 border-b">{index + 1}</td>
                            <td className="py-2 border-b">{transaction.name}</td>
                            <td className="py-2 border-b">{transaction.category}</td>
                            <td className="py-2 border-b">{transaction.date}</td>
                            <td className="py-2 border-b">{transaction.amount}</td>
                            <td className="py-2 border-b">{transaction.paymentMethod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;