import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { LifeBuoy, Settings } from "lucide-react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <TransactionList />
            </div>
            <div className="w-full md:w-1/3">
              <TransactionForm />
            </div>
          </div>
        );
      case "Transaksi":
        return <h1 className="text-xl font-bold">Halaman Transaksi</h1>;
      case "Rekening":
        return <h1 className="text-xl font-bold">Halaman Rekening</h1>;
      case "Transaksi Terjadwal":
        return <h1 className="text-xl font-bold">Halaman Transaksi Terjadwal</h1>;
      case "Anggaran":
        return <h1 className="text-xl font-bold">Halaman Anggaran</h1>;
      case "Kalender":
        return <h1 className="text-xl font-bold">Halaman Kalender</h1>;
      default:
        return <h1 className="text-xl font-bold">Halaman Tidak Ditemukan</h1>;
    }
  };

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<DashboardIcon size={20} />}
          text="Dashboard"
          active={activePage === "Dashboard"}
          onClick={() => setActivePage("Dashboard")}
        />
        <SidebarItem
          icon={<AccountBalanceIcon size={20} />}
          text="Rekening"
          active={activePage === "Rekening"}
          onClick={() => setActivePage("Rekening")}
        />
        <SidebarItem
          icon={<ReceiptLongIcon size={20} />}
          text="Transaksi"
          active={activePage === "Transaksi"}
          onClick={() => setActivePage("Transaksi")}
        />
        <SidebarItem
          icon={<ScheduleIcon size={20} />}
          text="Transaksi Terjadwal"
          active={activePage === "Transaksi Terjadwal"}
          onClick={() => setActivePage("Transaksi Terjadwal")}
        />
        <SidebarItem
          icon={<AccountBalanceWalletIcon size={20} />}
          text="Anggaran"
          active={activePage === "Anggaran"}
          onClick={() => setActivePage("Anggaran")}
        />
        <SidebarItem
          icon={<CalendarMonthIcon size={20} />}
          text="Kalender"
          active={activePage === "Kalender"}
          onClick={() => setActivePage("Kalender")}
        />
        <hr className="my-3" />
        <h4 className="font-bold text-lg">Preferensi</h4>
        <SidebarItem
          icon={<Settings size={20} />}
          text="Export PDF File"
          onClick={() => console.log("Export PDF File clicked")}
        />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Pengelolaan Kategori"
          onClick={() => console.log("Pengelolaan Kategori clicked")}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Pengaturan"
          onClick={() => console.log("Pengaturan clicked")}
        />
      </Sidebar>
      <div className="flex-1 p-8 bg-gray-100">{renderContent()}</div>
    </div>
  );
}

export default App;