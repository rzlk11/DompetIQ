import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    Avatar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

export const TransactionListSection = () => {
    // Transaction data for mapping
    const transactions = [
        {
            id: 1,
            name: "Winardi",
            category: "Buku / Majalah",
            paymentMethod: "Dompet",
            date: "08/03/2025",
            amount: "Rp 64.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/placeholder-3.svg",
        },
        {
            id: 2,
            name: "Karmini",
            category: "Sepatu, Pakaian",
            paymentMethod: "Rekening Bank",
            date: "07/03/2025",
            amount: "Rp 450.000",
            avatar: "https://c.animaapp.com/7SP2CZ3o/img/placeholder-3.svg",
        },
    ];

    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            <List disablePadding>
                {transactions.map((transaction, index) => (
                    <React.Fragment key={transaction.id}>
                        <ListItem
                            alignItems="flex-start"
                            sx={{ py: 1 }}
                            secondaryAction={
                                <IconButton edge="end">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            onClick={() =>
                                console.log(`Transaction ${transaction.id} clicked`)
                            }
                        >
                            <ListItemAvatar>
                                <Avatar src={transaction.avatar} alt={transaction.name} />
                            </ListItemAvatar>

                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        fontWeight="normal"
                                    >
                                        {transaction.name}
                                    </Typography>
                                }
                            />

                            <Box
                                sx={{ display: "flex", flexDirection: "column", width: 150 }}
                            >
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    fontWeight="normal"
                                >
                                    {transaction.category}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {transaction.paymentMethod}
                                </Typography>
                            </Box>

                            <Box sx={{ width: 120, textAlign: "left" }}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    fontWeight="semibold"
                                >
                                    {transaction.date}
                                </Typography>
                            </Box>

                            <Box sx={{ width: 120, textAlign: "left" }}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    fontWeight="semibold"
                                >
                                    {transaction.amount}
                                </Typography>
                            </Box>
                        </ListItem>
                        {index < transactions.length - 1 && (
                            <Divider component="li" sx={{ bgcolor: "#f5f5f5" }} />
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};
