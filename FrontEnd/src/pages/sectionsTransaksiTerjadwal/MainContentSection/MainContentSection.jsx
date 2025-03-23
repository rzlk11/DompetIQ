import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export const MainContentSection = () => {
    // Transaction data for mapping
    const transactions = [
        {
            id: 1,
            description: "Gaji",
            accountType: "Rekening Bank",
            date: "21/03/2025",
            amount: "Rp 12.000.000",
            leftIconUrl: "https://c.animaapp.com/TOoAOvTf/img/vector-37.svg",
            rightIconUrls: [
                "https://c.animaapp.com/TOoAOvTf/img/vector-39.svg",
                "https://c.animaapp.com/TOoAOvTf/img/vector-41.svg",
                "https://c.animaapp.com/TOoAOvTf/img/vector-43.svg",
            ],
        },
        {
            id: 2,
            description: "Bahan Bakar",
            accountType: "Dompet",
            date: "30/03/2025",
            amount: "Rp 360.000",
            leftIconUrl: "https://c.animaapp.com/TOoAOvTf/img/vector-38.svg",
            rightIconUrls: [
                "https://c.animaapp.com/TOoAOvTf/img/vector-40.svg",
                "https://c.animaapp.com/TOoAOvTf/img/vector-42.svg",
                "https://c.animaapp.com/TOoAOvTf/img/vector-44.svg",
            ],
        },
    ];

    return (
        <Box sx={{ width: "100%", py: 2 }}>
            {transactions.map((transaction, index) => (
                <React.Fragment key={transaction.id}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            py: 1.5,
                            position: "relative",
                        }}
                    >
                        <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
                            <Box
                                component="img"
                                src={transaction.leftIconUrl}
                                alt="Transaction icon"
                                sx={{ width: 12, height: 15 }}
                            />
                        </Box>

                        <Box sx={{ width: 147 }}>
                            <Typography
                                fontFamily="Inter, Helvetica"
                                fontWeight="normal"
                                fontSize="16px"
                                color="#292929B2"
                            >
                                {transaction.description}
                            </Typography>
                        </Box>

                        <Box sx={{ width: 147 }}>
                            <Typography
                                fontFamily="Inter, Helvetica"
                                fontWeight="normal"
                                fontSize="16px"
                                color="#292929B2"
                            >
                                {transaction.accountType}
                            </Typography>
                        </Box>

                        <Box sx={{ width: 112 }}>
                            <Typography
                                fontFamily="Inter, Helvetica"
                                fontWeight="semibold"
                                fontSize="16px"
                                color="#292929B2"
                            >
                                {transaction.date}
                            </Typography>
                        </Box>

                        <Box sx={{ width: 123 }}>
                            <Typography
                                fontFamily="Inter, Helvetica"
                                fontWeight="semibold"
                                fontSize="16px"
                                color="#6B6F7B"
                            >
                                {transaction.amount}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            {transaction.rightIconUrls.map((url, i) => (
                                <Box
                                    key={i}
                                    component="img"
                                    src={url}
                                    alt="Action icon"
                                    sx={{ width: 2, height: 3 }}
                                />
                            ))}
                        </Box>
                    </Stack>

                    {index < transactions.length - 1 && (
                        <Divider sx={{ backgroundColor: "#F5F5F5" }} />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};
