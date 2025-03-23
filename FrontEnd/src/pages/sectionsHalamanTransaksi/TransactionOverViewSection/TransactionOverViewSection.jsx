import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    Avatar,
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";

export const TransactionOverviewSection = () => {
    // Transaction data
    const transactions = [
        {
            id: 1,
            name: "Winardi",
            category: "BPJS Kesehatan",
            paymentMethod: "Rekening Bank",
            date: "12/03/2025",
            amount: "Rp 3.600.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/placeholder.svg",
        },
        {
            id: 2,
            name: "Jumiati",
            category: "Pembayaran Online",
            paymentMethod: "Dompet",
            date: "12/03/2025",
            amount: "Rp 1.200.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/placeholder-1.svg",
        },
        {
            id: 3,
            name: "Karmini",
            category: "Makan di Luar",
            paymentMethod: "Dompet",
            date: "10/03/2025",
            amount: "Rp 150.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/placeholder-2.svg",
        },
        {
            id: 4,
            name: "Markonah",
            category: "Teknologi",
            paymentMethod: "Rekening Bank",
            date: "10/03/2025",
            amount: "Rp 950.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/image-2@2x.png",
        },
        {
            id: 5,
            name: "Kartinah",
            category: "Hadiah",
            paymentMethod: "Dompet",
            date: "09/03/2025",
            amount: "Rp 270.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/placeholder-2.svg",
        },
        {
            id: 6,
            name: "Tukiyem",
            category: "Gaji",
            paymentMethod: "Rekening Bank",
            date: "09/03/2025",
            amount: "Rp 12.000.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/rectangle-4.svg",
        },
    ];

    return (
        <Box sx={{ width: "100%", maxWidth: 882 }}>
            <TableContainer>
                <Table>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow
                                key={transaction.id}
                                sx={{
                                    "&:not(:last-child)": {
                                        borderBottom: "1px solid #f5f5f5",
                                    },
                                    height: 67,
                                }}
                            >
                                <TableCell sx={{ border: "none", padding: "8px 16px 8px 0" }}>
                                    <Avatar
                                        src={transaction.avatar}
                                        alt={transaction.name}
                                        sx={{ width: 36, height: 36 }}
                                    />
                                </TableCell>

                                <TableCell sx={{ border: "none", padding: "8px 16px" }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: "Inter, Helvetica",
                                            color: "#292929b2",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {transaction.name}
                                    </Typography>
                                </TableCell>

                                <TableCell sx={{ border: "none", padding: "8px 16px" }}>
                                    <Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "Inter, Helvetica",
                                                color: "#292929b2",
                                                fontWeight: 400,
                                            }}
                                        >
                                            {transaction.category}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                fontFamily: "Inter, Helvetica",
                                                color: "#292929b2",
                                                display: "block",
                                                marginTop: "2px",
                                            }}
                                        >
                                            {transaction.paymentMethod}
                                        </Typography>
                                    </Box>
                                </TableCell>

                                <TableCell sx={{ border: "none", padding: "8px 16px" }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: "Inter, Helvetica",
                                            color: "#292929b2",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {transaction.date}
                                    </Typography>
                                </TableCell>

                                <TableCell sx={{ border: "none", padding: "8px 16px" }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: "Inter, Helvetica",
                                            color: "#6b6f7b",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {transaction.amount}
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    sx={{ border: "none", padding: "8px 0 8px 16px", width: 48 }}
                                >
                                    <IconButton size="small">
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
