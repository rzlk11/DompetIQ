import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, MoreVertical, X, ChevronDown } from 'lucide-react';

// Format currency helper
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID').format(Math.abs(amount));
};

// Account Card Component
const AccountCard = ({ account, onOpenMenu, menuOpen, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg mb-3 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="font-medium text-gray-800">{account.name}</div>
          <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
            <span className="inline-block w-2 h-2 bg-gray-300 rounded-full"></span> {account.type}
          </div>
          {account.notes && (
            <div className="text-xs text-gray-600 mt-2 italic">
              {account.notes}
            </div>
          )}
        </div>
        <div className="flex items-center">
          <div className={`mr-3 text-right ${account.balance < 0 ? 'text-red-500' : 'text-green-600'} font-medium`}>
            {account.balance < 0 ? '-' : ''}Rp {formatCurrency(account.balance)}
          </div>
          <div className="relative">
            <button 
              onClick={() => onOpenMenu(account.uuid)} 
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <MoreVertical size={18} className="text-gray-500" />
            </button>
            
            {menuOpen === account.uuid && (
              <div className="absolute right-0 top-8 bg-white shadow-lg rounded-md z-10 w-44 py-1 overflow-hidden">
                <div 
                  className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-gray-700 flex items-center gap-2" 
                  onClick={() => onEdit(account)}
                >
                  Edit rekening
                </div>
                <div 
                  className="px-4 py-2.5 hover:bg-red-50 cursor-pointer text-red-500 flex items-center gap-2" 
                  onClick={() => onDelete(account)}
                >
                  Hapus rekening
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add Account Modal Component
const AddAccountModal = ({ newAccount, setNewAccount, onClose, onSave }) => {
  return (
    <div className="fixed inset-0  bg-opacity-30  flex items-center justify-center z-20 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-auto animate-fadeIn">
        <div className="p-5">
          <h2 className="text-xl font-bold mb-5 text-gray-800">Rekening Baru</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Nama</label>
            <input 
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="Nama rekening"
              value={newAccount.name}
              onChange={(e) => setNewAccount({...newAccount, name: e.target.value})}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Jumlah Awal</label>
            <div className="flex items-center">
              <div className="flex-1 relative">
                <input 
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-2.5 pl-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="0"
                  value={newAccount.balance}
                  onChange={(e) => setNewAccount({...newAccount, balance: e.target.value})}
                />
                <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3">
                  <span className="text-gray-500">Rp</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Catatan (Opsional)</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              rows={3}
              placeholder="Tambahkan catatan..."
              value={newAccount.notes}
              onChange={(e) => setNewAccount({...newAccount, notes: e.target.value})}
            />
          </div>
          
          <div className="flex justify-end mt-6">
            <button 
              className="px-4 py-2.5 mr-3 text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium"
              onClick={onClose}
            >
              Batal
            </button>
            <button 
              className="px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
              onClick={onSave}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Banking Interface Component
export default function Rekening() {
  const [accounts, setAccounts] = useState([]);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showEditAccount, setShowEditAccount] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [newAccount, setNewAccount] = useState({ name: '', balance: 0, notes: '' });
  const [editAccount, setEditAccount] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);

  // Fetch accounts from backend
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rekening');
        setAccounts(response.data);
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
      }
    };
    fetchAccounts();
  }, []);

  const handleAddAccount = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rekening', newAccount);
      setAccounts([...accounts, response.data]);
      setShowAddAccount(false);
      setNewAccount({ name: '', balance: 0, notes: '' });
    } catch (error) {
      console.error('Failed to add account:', error);
    }
  };

  const handleEditAccount = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/rekening/${editAccount.uuid}`, editAccount);
      setAccounts(accounts.map(acc => (acc.uuid === editAccount.uuid ? response.data : acc)));
      setShowEditAccount(false);
      setEditAccount(null);
    } catch (error) {
      console.error('Failed to edit account:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/rekening/${deleteAccount.uuid}`);
      setAccounts(accounts.filter(acc => acc.uuid !== deleteAccount.uuid));
      setShowDeleteAccount(false);
      setDeleteAccount(null);
    } catch (error) {
      console.error('Failed to delete account:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative shadow-lg md:my-6 md:min-h-0 md:rounded-xl lg:max-w-lg">
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="text-xs text-gray-500 flex items-center">
            <span className="mr-1">▼</span> Rekening Saya
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">
              Total: <span className="text-green-600 font-semibold">Rp {formatCurrency(accounts.reduce((sum, acc) => sum + acc.balance, 0))}</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {accounts.map(account => (
            <AccountCard
              key={account.uuid}
              account={account}
              menuOpen={menuOpen}
              onOpenMenu={setMenuOpen}
              onEdit={setEditAccount}
              onDelete={setDeleteAccount}
            />
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={() => setShowAddAccount(true)}
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Tambah rekening baru"
        >
          <Plus size={24} />
        </button>
      </div>

      {showAddAccount && (
        <AddAccountModal
          newAccount={newAccount}
          setNewAccount={setNewAccount}
          onClose={() => setShowAddAccount(false)}
          onSave={handleAddAccount}
        />
      )}
      {showEditAccount && editAccount && (
        <AddAccountModal
          newAccount={editAccount}
          setNewAccount={setEditAccount}
          onClose={() => setShowEditAccount(false)}
          onSave={handleEditAccount}
        />
      )}
      {showDeleteAccount && deleteAccount && (
        <DeleteAccountModal
          account={deleteAccount}
          onClose={() => setShowDeleteAccount(false)}
          onConfirm={handleDeleteAccount}
        />
      )}
    </div>
  );
}