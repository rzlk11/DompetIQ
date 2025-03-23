import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export const NavigationBarSection = () => {
  // Data for transaction rows
  const transactions = [
    {
      category: "Lain (Pengeluaran)",
      account: "Dompet",
      date: "18/03/2025",
      amount: "Rp 900.000",
    },
    {
      category: "Transportasi",
      account: "Rekening Bank",
      date: "20/03/2025",
      amount: "Rp 70.000",
    },
  ];

  return (
    <Box width="100%">
      <Stack spacing={2}>
        {transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            <Box display="flex" alignItems="center" width="100%">
              {/* Left arrow icon */}
              <Box mr={2}>
                <img
                  alt="Left arrow"
                  src="https://c.animaapp.com/TOoAOvTf/img/vector-37.svg"
                  style={{ width: "12px", height: "15px" }}
                />
              </Box>

              {/* Transaction details */}
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
              >
                <Typography
                  fontFamily="Inter, Helvetica"
                  fontWeight="normal"
                  fontSize="16px"
                  color="rgba(41, 41, 41, 0.7)"
                >
                  {transaction.category}
                </Typography>

                <Typography
                  fontFamily="Inter, Helvetica"
                  fontWeight="normal"
                  fontSize="16px"
                  color="rgba(41, 41, 41, 0.7)"
                >
                  {transaction.account}
                </Typography>

                <Typography
                  fontFamily="Inter, Helvetica"
                  fontWeight="600"
                  fontSize="16px"
                  color="rgba(41, 41, 41, 0.7)"
                >
                  {transaction.date}
                </Typography>

                <Typography
                  fontFamily="Inter, Helvetica"
                  fontWeight="600"
                  fontSize="16px"
                  color="#6b6f7b"
                >
                  {transaction.amount}
                </Typography>
              </Stack>

              {/* Right arrow icons */}
              <Box ml={2} display="flex" flexDirection="column" gap={0.5}>
                <img
                  alt="Right arrow top"
                  src="https://c.animaapp.com/TOoAOvTf/img/vector-39.svg"
                  style={{ width: "2px", height: "3px" }}
                />
                <img
                  alt="Right arrow middle"
                  src="https://c.animaapp.com/TOoAOvTf/img/vector-41.svg"
                  style={{ width: "2px", height: "3px" }}
                />
                <img
                  alt="Right arrow bottom"
                  src="https://c.animaapp.com/TOoAOvTf/img/vector-43.svg"
                  style={{ width: "2px", height: "3px" }}
                />
              </Box>
            </Box>

            {index === 0 && <Divider sx={{ backgroundColor: "#f5f5f5" }} />}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};
