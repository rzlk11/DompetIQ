import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ErrorIcon from "@mui/icons-material/Error";
import FolderIcon from "@mui/icons-material/Folder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RefreshIcon from "@mui/icons-material/Refresh";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShieldIcon from "@mui/icons-material/Shield";
import UploadIcon from "@mui/icons-material/Upload";
import {
    Avatar,
    Box,
    Fab,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Pagination,
    PaginationItem,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { TransactionFilterSection } from "./sections/TransactionFilterSection";
import { TransactionListSection } from "./sections/TransactionListSection";
import { TransactionOverviewSection } from "./sections/TransactionOverViewSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const HalamanTransaksi = () => {
    return (
        <Box sx={{ display: "flex", bgcolor: "white", width: "100%" }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: 283,
                    bgcolor: "#252525",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                }}
            >
                {/* Logo */}
                <Stack direction="row" spacing={1} sx={{ p: 4 }}>
                    <Box sx={{ width: 41, height: 54, position: "relative" }}>
                        <Box
                            component="div"
                            sx={{
                                width: 41,
                                height: 54,
                                position: "relative",
                                backgroundImage:
                                    "url(https://c.animaapp.com/7SP2CZ3o/img/vector-45.svg)",
                                backgroundSize: "100% 100%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 13,
                                    height: 13,
                                    position: "absolute",
                                    top: 26,
                                    left: 13,
                                    bgcolor: "#f8f8f8",
                                    borderRadius: "6.26px/6.58px",
                                }}
                            />
                        </Box>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Plus Jakarta Sans', Helvetica",
                            fontWeight: 800,
                            color: "white",
                            fontSize: 26,
                        }}
                    >
                        DompetIQ
                    </Typography>
                </Stack>

                {/* Menu Sections */}
                <Box sx={{ mt: 2, color: "white" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            px: 3,
                            py: 1,
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        MENGELOLA
                    </Typography>

                    <List>
                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <DashboardIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <AccountBalanceIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Rekening" />
                        </ListItem>

                        <ListItem button sx={{ bgcolor: "#3f3f3f" }}>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <ReceiptIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Transaksi" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <ScheduleIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Transaksi Terjadwal" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <AccountBalanceWalletIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Anggaran" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <CalendarTodayIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Kalender" />
                        </ListItem>
                    </List>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            px: 3,
                            py: 1,
                            fontWeight: "bold",
                            fontSize: 16,
                            mt: 2,
                        }}
                    >
                        PREFERENSI
                    </Typography>

                    <List>
                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <FolderIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Export PDF File" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <CategoryIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Pengelolaan Kategori" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <SettingsIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Pengaturan" />
                        </ListItem>
                    </List>
                </Box>

                {/* User Profile at Bottom */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 20,
                        left: 0,
                        width: "100%",
                        px: 3,
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                            src="https://c.animaapp.com/7SP2CZ3o/img/1642926002105--1--1@2x.png"
                            sx={{ width: 44, height: 44 }}
                        />
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                Suparno
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#babec8",
                                    fontSize: 12,
                                }}
                            >
                                suparno31@gmail.com
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ width: "100%", ml: "283px" }}>
                {/* Browser-like Header */}
                <Paper
                    elevation={0}
                    sx={{
                        height: 89,
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        borderBottom: "1.5px solid #f2f2f2",
                    }}
                >
                    <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "#f86156",
                                borderRadius: 10,
                            }}
                        />
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "#f9ce53",
                                borderRadius: 10,
                            }}
                        />
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "#5fcf65",
                                borderRadius: 10,
                            }}
                        />
                    </Stack>

                    <IconButton size="small" sx={{ ml: 4 }}>
                        <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)" }} />
                    </IconButton>

                    <IconButton size="small">
                        <ArrowForwardIosIcon />
                    </IconButton>

                    <IconButton size="small" sx={{ ml: 2 }}>
                        <ShieldIcon />
                    </IconButton>

                    <TextField
                        variant="outlined"
                        value="dompetiq.io/transaksi"
                        InputProps={{
                            sx: {
                                bgcolor: "#f2f2f2",
                                borderRadius: 0,
                                height: 38,
                                width: 635,
                                ml: 4,
                            },
                            readOnly: true,
                        }}
                    />

                    <IconButton size="small" sx={{ ml: 2 }}>
                        <RefreshIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton>
                        <UploadIcon />
                    </IconButton>

                    <IconButton>
                        <ContentCopyIcon />
                    </IconButton>

                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </Paper>

                {/* Page Header */}
                <Box
                    sx={{
                        height: 114,
                        px: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 32 }}>
                        Transaksi
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <IconButton sx={{ bgcolor: "#f6f6f6" }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "#f6f6f6" }}>
                            <ErrorIcon />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "#f6f6f6" }}>
                            <MoreHorizIcon />
                        </IconButton>
                    </Stack>
                </Box>

                {/* Main Content Area */}
                <Box sx={{ bgcolor: "#f6f6f6", p: 4 }}>
                    <Grid container spacing={2}>
                        {/* Left Content */}
                        <Grid item xs={9}>
                            <Paper sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                    Riwayat Transaksi
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    <DarkModeIcon sx={{ fontSize: 24, mr: 1 }} />
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "#292929b2",
                                            fontSize: 12,
                                            display: "block",
                                            mt: 1,
                                        }}
                                    >
                                        Rekening Bank
                                    </Typography>
                                </Box>

                                {/* Transaction Filter Section */}
                                <TransactionFilterSection />

                                {/* Transaction Overview Section */}
                                <TransactionOverviewSection />

                                {/* Transaction List Section */}
                                <TransactionListSection />

                                {/* Pagination */}
                                <Box
                                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                                >
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 500, fontSize: 12 }}
                                        >
                                            1-2 item
                                        </Typography>
                                        <Pagination
                                            count={2}
                                            page={1}
                                            renderItem={(item) => (
                                                <PaginationItem
                                                    {...item}
                                                    sx={{
                                                        bgcolor:
                                                            item.page === 1 ? "#51c41b" : "transparent",
                                                        color: item.page === 1 ? "white" : "#505470",
                                                        border:
                                                            item.page !== 1 ? "1px solid #eff0f4" : "none",
                                                        borderRadius: "3px",
                                                        width: 26,
                                                        height: 27,
                                                    }}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Right Content - User Profile */}
                        <Grid item xs={3}>
                            <UserProfileSection />

                            {/* Action Buttons */}
                            <Fab
                                color="primary"
                                aria-label="add"
                                sx={{
                                    position: "absolute",
                                    right: 30,
                                    bottom: 120,
                                    bgcolor: "#51c41b",
                                    width: 51,
                                    height: 48,
                                    borderRadius: "25.5px/24px",
                                }}
                            >
                                <AddIcon />
                            </Fab>

                            <Fab
                                color="secondary"
                                aria-label="add"
                                sx={{
                                    position: "absolute",
                                    right: 30,
                                    bottom: 50,
                                    bgcolor: "#ff3a3a",
                                    width: 51,
                                    height: 48,
                                    borderRadius: "25.5px/24px",
                                }}
                            >
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};
