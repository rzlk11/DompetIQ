import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

export const TransactionFilterSection = () => {
    // Transaction data
    const transactions = [
        {
            id: 1,
            name: "Widodo",
            category: "Hiburan",
            date: "11/03/2025",
            amount: "Rp 300.000",
        },
        {
            id: 2,
            name: "Sumarni",
            category: "Bahan Bakar",
            date: "10/03/2025",
            amount: "Rp 260.000",
        },
    ];

    return (
        <Box sx={{ width: "100%", py: 2 }}>
            <List disablePadding>
                {transactions.map((transaction, index) => (
                    <React.Fragment key={transaction.id}>
                        <ListItem
                            sx={{
                                py: 1.5,
                                px: 0,
                                cursor: "pointer",
                                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                            }}
                            onClick={() =>
                                console.log(`Transaction ${transaction.id} clicked`)
                            }
                        >
                            <Stack direction="row" alignItems="center" width="100%">
                                <Box sx={{ width: 24, ml: 3, mr: 2 }}>
                                    <img
                                        alt="Vector"
                                        src="https://c.animaapp.com/7SP2CZ3o/img/vector-36.svg"
                                        style={{ width: "12px", height: "15px" }}
                                    />
                                </Box>

                                <Box sx={{ width: "100px" }}>
                                    <Typography
                                        variant="body1"
                                        fontFamily="Inter, Helvetica"
                                        color="#292929b2"
                                    >
                                        {transaction.name}
                                    </Typography>
                                </Box>

                                <Box sx={{ width: "147px", ml: 3 }}>
                                    <Typography
                                        variant="body1"
                                        fontFamily="Inter, Helvetica"
                                        color="#292929b2"
                                    >
                                        {transaction.category}
                                    </Typography>
                                </Box>

                                <Box sx={{ width: "112px", ml: 1 }}>
                                    <Typography
                                        variant="body1"
                                        fontFamily="Inter, Helvetica"
                                        fontWeight="600"
                                        color="#292929b2"
                                    >
                                        {transaction.date}
                                    </Typography>
                                </Box>

                                <Box sx={{ width: "123px", ml: 1 }}>
                                    <Typography
                                        variant="body1"
                                        fontFamily="Inter, Helvetica"
                                        fontWeight="600"
                                        color="#6b6f7b"
                                    >
                                        {transaction.amount}
                                    </Typography>
                                </Box>

                                <Box sx={{ ml: "auto", mr: 2 }}>
                                    <MoreVertIcon sx={{ color: "#292929b2" }} />
                                </Box>
                            </Stack>
                        </ListItem>

                        {index < transactions.length - 1 && (
                            <Divider sx={{ bgcolor: "#f5f5f5" }} />
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};
