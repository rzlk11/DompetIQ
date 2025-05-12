import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { generatePDFReport } from './pdfGenerator';
import axios from 'axios';

function ExportPDF() {
  
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const today = new Date();
    const currentPeriod = `${months[today.getMonth()]} ${today.getFullYear()}`;

    const [formData, setFormData] = useState({
      type: 'Laporan',
      period: currentPeriod,
      account: 'Semua Rekening',
      includes: {
        income: false,
        expense: false,
        accounts: false,
        budget: false
      }
    });

    const [daftarRekening, setDaftarRekening] = useState(["Semua Rekening"]);

  useEffect(() => {
    fetchAccounts();  
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/rekening');
      setDaftarRekening(response.data);
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    }
  }

  const handleExport = () => {
    if (!Object.values(formData.includes).some(value => value === true)) {
      alert('Silakan pilih minimal satu jenis laporan untuk dimasukkan');
      return;
    }
    
    generatePDFReport(formData);
  };

  const handleCheckboxChange = (field) => {
    setFormData({
      ...formData,
      includes: {
        ...formData.includes,
        [field]: !formData.includes[field]
      }
    });
  };

  console.log(formData);

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative shadow-lg md:my-6 md:min-h-0 md:rounded-xl">
      <div className="bg-white p-6">
        <h1 className="text-xl font-bold mb-6">Buat Berkas - PDF</h1>
        
        {/* Type Dropdown */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">Tipe:</label>
          <div className="relative">
            <select 
              className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer pr-10"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option>Laporan</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Period Dropdown - Modified to only show 2025 */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">Periode:</label>
          <div className="relative">
            <select 
              className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer pr-10"
              value={formData.period}
              onChange={(e) => setFormData({...formData, period: e.target.value})}
            >
              {months.map(month => (
                <option key={`${month}-${today.getFullYear()}`}>{`${month} ${today.getFullYear()}`}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Account Dropdown */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">Rekening:</label>
          <div className="relative">
            <select 
              className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer pr-10"
              value={formData.account}
              onChange={(e) => setFormData({...formData, account: e.target.value})}
            >
              <option value="Semua Rekening">Semua Rekening</option>
              {daftarRekening.map((rekening, index) => (
                <option key={index} value={rekening.name}>{rekening.name}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown size={18} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="mb-8">
          <label className="block text-sm text-gray-600 mb-3">Masukkan laporan di:</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-500 border-gray-300 rounded"
                checked={formData.includes.income}
                onChange={() => handleCheckboxChange('income')}
              />
              <span className="ml-2 text-sm text-gray-700">Pemasukan</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-500 border-gray-300 rounded"
                checked={formData.includes.expense}
                onChange={() => handleCheckboxChange('expense')}
              />
              <span className="ml-2 text-sm text-gray-700">Pengeluaran</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-500 border-gray-300 rounded"
                checked={formData.includes.accounts}
                onChange={() => handleCheckboxChange('accounts')}
              />
              <span className="ml-2 text-sm text-gray-700">Rekening</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-500 border-gray-300 rounded"
                checked={formData.includes.budget}
                onChange={() => handleCheckboxChange('budget')}
              />
              <span className="ml-2 text-sm text-gray-700">Anggaran</span>
            </label>
          </div>
        </div>

        {/* Export Button */}
        <div className="flex justify-end">
          <button
            onClick={handleExport}
            className="px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Ekspor Berkas PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExportPDF;