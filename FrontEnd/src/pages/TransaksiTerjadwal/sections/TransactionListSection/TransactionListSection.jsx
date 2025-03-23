import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    Box,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";

export const TransactionListSection = () => {
    // Transaction data for mapping
    const transactions = [
        {
            id: 1,
            category: "Rumah",
            account: "Rekening Bank",
            date: "17/03/2025",
            amount: "Rp 1.200.000",
        },
        {
            id: 2,
            category: "Tagihan Listrik",
            account: "Dompet",
            date: "17/03/2025",
            amount: "Rp 650.000",
        },
        {
            id: 3,
            category: "Teknologi",
            account: "Rekening Bank",
            date: "01/04/2025",
            amount: "Rp 900.000",
        },
        {
            id: 4,
            category: "Hadiah",
            account: "Dompet",
            date: "01/04/2025",
            amount: "Rp 150.000",
        },
        {
            id: 5,
            category: "Hiburan",
            account: "Dompet",
            date: "02/04/2025",
            amount: "Rp 230.000",
        },
        {
            id: 6,
            category: "Berbelanja",
            account: "Rekening Bank",
            date: "03/04/2025",
            amount: "Rp 550.000",
        },
    ];

    return (
        <Box sx={{ width: "100%" }}>
            <TableContainer>
                <Table>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow
                                key={transaction.id}
                                hover
                                sx={{
                                    "&:not(:last-child)": {
                                        borderBottom: 1,
                                        borderColor: "divider",
                                    },
                                    cursor: "pointer",
                                }}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox color="primary" size="small" />
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontFamily="Inter, Helvetica"
                                        fontWeight="normal"
                                        color="text.secondary"
                                    >
                                        {transaction.category}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontFamily="Inter, Helvetica"
                                        fontWeight="normal"
                                        color="text.secondary"
                                    >
                                        {transaction.account}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontFamily="Inter, Helvetica"
                                        fontWeight="semibold"
                                        color="text.secondary"
                                    >
                                        {transaction.date}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontFamily="Inter, Helvetica"
                                        fontWeight="semibold"
                                        color="#6b6f7b"
                                    >
                                        {transaction.amount}
                                    </Typography>
                                </TableCell>
                                <TableCell padding="checkbox">
                                    <IconButton size="small">
                                        <MoreVertIcon fontSize="small" />
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
