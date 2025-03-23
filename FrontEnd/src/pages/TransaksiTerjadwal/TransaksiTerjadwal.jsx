import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import {
    Avatar,
    Box,
    Fab,
    Grid,
    IconButton,
    Pagination,
    PaginationItem,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { PreferencesSection } from "./sections/PreferencesSection";
import { TransactionListSection } from "./sections/TransactionListSection";

export const TransaksiTerjadwal = () => {
    // Navigation menu items data
    const menuItems = [
        {
            title: "Dashboard",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vector-45.svg",
        },
        {
            title: "Rekening",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vuesax-bold-bank.svg",
        },
        {
            title: "Transaksi",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vuesax-bold-receipt-text.svg",
        },
        {
            title: "Transaksi Terjadwal",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vuesax-bold-clock.svg",
        },
        {
            title: "Anggaran",
            icon: "https://c.animaapp.com/TOoAOvTf/img/fluent-wallet-credit-card-16-filled.svg",
        },
        {
            title: "Kalender",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vuesax-bold-note-text.svg",
        },
    ];

    // Preference menu items data
    const preferenceItems = [
        {
            title: "Export PDF File",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vuesax-bold-folder.svg",
        },
        {
            title: "Pengelolaan Kategori",
            icon: "https://c.animaapp.com/TOoAOvTf/img/vuesax-bold-receipt-2.svg",
        },
        {
            title: "Pengaturan",
            icon: "https://c.animaapp.com/TOoAOvTf/img/ci-settings-filled.svg",
        },
    ];

    return (
        <Box sx={{ display: "flex", bgcolor: "background.default", width: "100%" }}>
            <Box sx={{ width: "1440px", position: "relative" }}>
                {/* Top Navigation Bar */}
                <Box
                    sx={{
                        width: "100%",
                        height: "89px",
                        bgcolor: "background.default",
                        borderBottom: "1.5px solid",
                        borderColor: "neutral.50",
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                    }}
                >
                    <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "#F86156",
                                borderRadius: "10px",
                            }}
                        />
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "#F9CE53",
                                borderRadius: "10px",
                            }}
                        />
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "#5FCF65",
                                borderRadius: "10px",
                            }}
                        />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", ml: 8 }}>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/bxs-book-content.svg"
                                width={28}
                                height={28}
                            />
                        </IconButton>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/eva-arrow-ios-forward-outline-1.svg"
                                width={28}
                                height={28}
                            />
                        </IconButton>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/eva-arrow-ios-forward-outline.svg"
                                width={28}
                                height={28}
                            />
                        </IconButton>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/bi-shield-shaded.svg"
                                width={24}
                                height={24}
                            />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "#F2F2F2",
                            width: 635,
                            height: 38,
                            borderRadius: 1,
                            px: 4,
                            mx: "auto",
                        }}
                    >
                        <Typography variant="body1" color="#7A7A7A">
                            dompetiq.io/transaksiterjadwal
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", ml: "auto", gap: 1 }}>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/ion-refresh-sharp.svg"
                                width={24}
                                height={24}
                            />
                        </IconButton>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/ant-design-upload-outlined.svg"
                                width={28}
                                height={28}
                            />
                        </IconButton>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/fluent-document-copy-20-regular.svg"
                                width={28}
                                height={28}
                            />
                        </IconButton>
                        <IconButton>
                            <Box
                                component="img"
                                src="https://c.animaapp.com/TOoAOvTf/img/carbon-add.svg"
                                width={28}
                                height={28}
                            />
                        </IconButton>
                    </Box>
                </Box>

                {/* Main Content Area */}
                <Box sx={{ display: "flex", height: "calc(100vh - 89px)" }}>
                    {/* Sidebar */}
                    <Box sx={{ width: 283, bgcolor: "secondary.main", color: "white" }}>
                        {/* Logo */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                py: 5,
                            }}
                        >
                            <Box sx={{ position: "relative", width: 231, height: 54 }}>
                                <Box
                                    sx={{ position: "relative", width: 41, height: 54, left: 5 }}
                                >
                                    <Box
                                        component="div"
                                        sx={{
                                            backgroundImage:
                                                "url(https://c.animaapp.com/TOoAOvTf/img/vector-46.svg)",
                                            backgroundSize: "100% 100%",
                                            width: 41,
                                            height: 54,
                                            position: "relative",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 13,
                                                height: 13,
                                                bgcolor: "#F8F8F8",
                                                borderRadius: "6.26px/6.58px",
                                                position: "absolute",
                                                top: 26,
                                                left: 13,
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 12,
                                        left: 58,
                                        fontFamily: "'Plus Jakarta Sans', Helvetica",
                                        fontWeight: 800,
                                        fontSize: 26,
                                        color: "white",
                                    }}
                                >
                                    DompetIQ
                                </Typography>
                            </Box>
                        </Box>

                        {/* Menu Sections */}
                        <Box sx={{ px: 3, mb: 4 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "'DM Sans', Helvetica",
                                    fontWeight: 700,
                                    color: "white",
                                    mb: 2,
                                }}
                            >
                                MENGELOLA
                            </Typography>

                            <Stack spacing={1}>
                                {menuItems.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            py: 1,
                                            bgcolor:
                                                item.title === "Transaksi Terjadwal"
                                                    ? "secondary.light"
                                                    : "transparent",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.icon}
                                            width={24}
                                            height={24}
                                            sx={{ mr: 2 }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "'DM Sans', Helvetica",
                                                color: "white",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={{ px: 3 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "'DM Sans', Helvetica",
                                    fontWeight: 700,
                                    color: "white",
                                    mb: 2,
                                }}
                            >
                                PREFERENSI
                            </Typography>

                            <Stack spacing={1}>
                                {preferenceItems.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            py: 1,
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.icon}
                                            width={24}
                                            height={24}
                                            sx={{ mr: 2 }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "'DM Sans', Helvetica",
                                                color: "white",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        {/* User Profile */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                bottom: 40,
                                left: 32,
                            }}
                        >
                            <Avatar
                                src="https://c.animaapp.com/TOoAOvTf/img/1642926002105--1--1@2x.png"
                                sx={{ width: 44, height: 44 }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <Typography
                                    sx={{
                                        fontFamily: "'Inter', Helvetica",
                                        fontWeight: 600,
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >
                                    Suparno
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "'Inter', Helvetica",
                                        fontWeight: 500,
                                        color: "#BABEC8",
                                        fontSize: 12,
                                    }}
                                >
                                    suparno31@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Main Content */}
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        {/* Header */}
                        <Box sx={{ p: 3, bgcolor: "background.default" }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontFamily: "'DM Sans', Helvetica",
                                    fontWeight: 700,
                                    color: "text.primary",
                                }}
                            >
                                Transaksi Terjadwal
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: -5 }}>
                                <IconButton sx={{ bgcolor: "#F6F6F6" }}>
                                    <SearchIcon fontSize="small" />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#F6F6F6", mx: 1 }}>
                                    <ErrorOutlineIcon fontSize="small" />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#F6F6F6" }}>
                                    <MoreHorizIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Content Area */}
                        <Box sx={{ flex: 1, bgcolor: "#F6F6F6", p: 3, display: "flex" }}>
                            {/* Main Content Area */}
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ bgcolor: "background.default", p: 2, mb: 2 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: "'DM Sans', Helvetica",
                                            fontWeight: 700,
                                            color: "#292929",
                                        }}
                                    >
                                        Terjadwal
                                    </Typography>

                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <NavigationBarSection />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <MainContentSection />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TransactionListSection />
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Pagination */}
                                <Box
                                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Typography
                                            sx={{
                                                fontFamily: "'Inter', Helvetica",
                                                fontWeight: 500,
                                                color: "#232638",
                                                fontSize: 12,
                                                mr: 2,
                                            }}
                                        >
                                            1-2 item
                                        </Typography>
                                        <Pagination
                                            count={2}
                                            renderItem={(item) => (
                                                <PaginationItem
                                                    {...item}
                                                    sx={{
                                                        bgcolor:
                                                            item.page === 1 ? "primary.main" : "transparent",
                                                        color: item.page === 1 ? "white" : "#505470",
                                                        border: "1px solid #EFF0F4",
                                                        borderRadius: "3px",
                                                        width: 26,
                                                        height: 27,
                                                        fontSize: 12,
                                                        fontWeight: 500,
                                                        fontFamily: "'Inter', Helvetica",
                                                    }}
                                                />
                                            )}
                                        />
                                    </Box>
                                </Box>
                            </Box>

                            {/* Preferences Section */}
                            <Box sx={{ width: 280, ml: 2 }}>
                                <PreferencesSection />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Action Buttons */}
                <Fab
                    color="primary"
                    sx={{
                        position: "fixed",
                        bottom: 120,
                        right: 30,
                        width: 51,
                        height: 48,
                        borderRadius: "25.5px/24px",
                    }}
                >
                    <AddIcon />
                </Fab>

                <Fab
                    color="error"
                    sx={{
                        position: "fixed",
                        bottom: 50,
                        right: 30,
                        width: 51,
                        height: 48,
                        borderRadius: "25.5px/24px",
                    }}
                >
                    <AddIcon />
                </Fab>
            </Box>
        </Box>
    );
};
