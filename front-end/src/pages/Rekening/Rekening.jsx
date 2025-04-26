
import React, { useState } from 'react';
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
              onClick={() => onOpenMenu(account.id)} 
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <MoreVertical size={18} className="text-gray-500" />
            </button>
            
            {menuOpen === account.id && (
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
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Mata Uang Rekening</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-300 rounded-lg p-2.5 appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white"
                value={newAccount.currency}
                onChange={(e) => setNewAccount({...newAccount, currency: e.target.value})}
              >
                <option>IDR - Rp</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Jumlah Awal</label>
            <div className="flex items-center">
              <div className="flex-1 relative">
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 pl-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="0"
                  value={newAccount.initialBalance}
                  onChange={(e) => setNewAccount({...newAccount, initialBalance: e.target.value})}
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

// Edit Account Modal Component
const EditAccountModal = ({ editAccount, setEditAccount, onClose, onSave }) => {
  return (
    <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-20 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-auto animate-fadeIn">
        <div className="p-5">
          <h2 className="text-xl font-bold mb-5 text-gray-800">EDIT AKUN</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Nama</label>
            <input 
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={editAccount.name}
              onChange={(e) => setEditAccount({...editAccount, name: e.target.value})}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Mata uang akun</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-300 rounded-lg p-2.5 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                value="Rupiah - Rp"
                disabled
              >
                <option>Rupiah - Rp</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Jumlah awal</label>
            <div className="flex items-center">
              <div className="flex-1 relative">
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  value={editAccount.initialBalance}
                  onChange={(e) => setEditAccount({...editAccount, initialBalance: e.target.value})}
                />
                <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3">
                  <span className="text-gray-500">Rp</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Catatan</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              rows={3}
              placeholder="Opsional"
              value={editAccount.notes}
              onChange={(e) => setEditAccount({...editAccount, notes: e.target.value})}
            />
          </div>
          
          <div className="flex justify-end mt-6">
            <button 
              className="px-4 py-2.5 mr-3 text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium"
              onClick={onClose}
            >
              MEMBATALKAN
            </button>
            <button 
              className="px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
              onClick={onSave}
            >
              MENYIMPAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Delete Account Modal Component
const DeleteAccountModal = ({ account, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0  bg-opacity-40  flex items-center justify-center z-20 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-auto animate-scaleIn">
        <div className="px-5 py-4 border-b flex justify-between items-center">
          <h3 className="font-medium text-gray-800">HAPUS "{account.name}"?</h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>
        <div className="px-5 py-4">
          <p className="text-sm text-gray-600">
            Semua pendapatan dan pengeluaran yang terkait dengan akun ini akan dihapus.
          </p>
        </div>
        <div className="flex border-t">
          <button 
            className="flex-1 py-3.5 text-blue-500 font-medium border-r hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            KEMBALI
          </button>
          <button 
            className="flex-1 py-3.5 text-red-500 font-medium hover:bg-red-50 transition-colors"
            onClick={onConfirm}
          >
            OKE
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Banking Interface Component
export default function Rekening() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Gopay', type: 'tabungan', balance: -65000, notes: '' },
    { id: 2, name: 'Rekening Bank', type: 'tabungan', balance: 122000500, notes: '' },
  ]);
  
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showEditAccount, setShowEditAccount] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  
  const [editAccount, setEditAccount] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);
  
  const [newAccount, setNewAccount] = useState({
    name: '',
    currency: 'IDR - Rp',
    initialBalance: '',
    notes: ''
  });
  
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  
  const handleAddAccount = () => {
    setShowAddAccount(true);
  };
  
  const handleSaveNewAccount = () => {
    const newId = accounts.length > 0 ? Math.max(...accounts.map(acc => acc.id)) + 1 : 1;
    const initialBalance = parseInt(newAccount.initialBalance) || 0;
    
    setAccounts([...accounts, {
      id: newId,
      name: newAccount.name || 'Akun Baru',
      type: 'Normal',
      balance: initialBalance,
      notes: newAccount.notes || ''
    }]);
    
    setNewAccount({
      name: '',
      currency: 'IDR - Rp',
      initialBalance: '',
      notes: ''
    });
    
    setShowAddAccount(false);
  };
  
  const handleOpenMenu = (accountId) => {
    if (menuOpen === accountId) {
      setMenuOpen(null);
    } else {
      setMenuOpen(accountId);
    }
  };
  
  const handleEdit = (account) => {
    setEditAccount({
      ...account,
      currency: 'Rupiah - Rp',
      initialBalance: account.balance.toString(),
      notes: account.notes || ''
    });
    setShowEditAccount(true);
    setMenuOpen(null);
  };
  
  const handleDelete = (account) => {
    setDeleteAccount(account);
    setShowDeleteAccount(true);
    setMenuOpen(null);
  };
  
  const handleSaveEdit = () => {
    if (!editAccount) return;
    
    setAccounts(accounts.map(acc => 
      acc.id === editAccount.id 
        ? { 
            ...acc, 
            name: editAccount.name, 
            balance: parseInt(editAccount.initialBalance) || 0,
            notes: editAccount.notes || ''
          } 
        : acc
    ));
    setShowEditAccount(false);
  };
  
  const handleConfirmDelete = () => {
    if (!deleteAccount) return;
    
    setAccounts(accounts.filter(acc => acc.id !== deleteAccount.id));
    setShowDeleteAccount(false);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative shadow-lg md:my-6 md:min-h-0 md:rounded-xl lg:max-w-lg">
      {/* Main Banking Interface */}
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="text-xs text-gray-500 flex items-center">
            <span className="mr-1">▼</span> Rekening Saya
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">
              Total: <span className="text-green-600 font-semibold">Rp {formatCurrency(totalBalance)}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {accounts.map(account => (
            <AccountCard 
              key={account.id}
              account={account}
              menuOpen={menuOpen}
              onOpenMenu={handleOpenMenu}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      
      {/* Add Button */}
      <div className="fixed bottom-0 right-6 z-10 md:absolute">
        <button 
          onClick={handleAddAccount}
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Tambah rekening baru"
        >
          <Plus size={24} />
        </button>
      </div>
      
      {/* Modals */}
      {showAddAccount && (
        <AddAccountModal
          newAccount={newAccount}
          setNewAccount={setNewAccount}
          onClose={() => setShowAddAccount(false)}
          onSave={handleSaveNewAccount}
        />
      )}
      
      {showEditAccount && editAccount && (
        <EditAccountModal
          editAccount={editAccount}
          setEditAccount={setEditAccount}
          onClose={() => setShowEditAccount(false)}
          onSave={handleSaveEdit}
        />
      )}
      
      {showDeleteAccount && deleteAccount && (
        <DeleteAccountModal
          account={deleteAccount}
          onClose={() => setShowDeleteAccount(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}