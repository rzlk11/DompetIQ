import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#51C41B",
      light: "#F5F7F9",
    },
    secondary: {
      main: "#252525",
      light: "#3F3F3F",
    },
    error: {
      main: "#FF3A3A",
    },
    text: {
      primary: "#292929",
      secondary: "#7A7A7A",
      disabled: "#FFFFFFB2",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
      gray: "#F6F6F6",
    },
    divider: "#F5F5F5",
  },
  typography: {
    fontFamily: [
      "DM Sans",
      "Inter",
      "Urbanist",
      "Lexend Deca",
      "Plus Jakarta Sans",
      "Poppins",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "44.8px",
    },
    h2: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44.8px",
    },
    h3: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "28.0px",
    },
    h4: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "28.0px",
    },
    h5: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "22.4px",
    },
    h6: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "22.4px",
    },
    subtitle1: {
      fontFamily: "Inter, Helvetica",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "normal",
    },
    subtitle2: {
      fontFamily: "Inter, Helvetica",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "normal",
    },
    body1: {
      fontFamily: "DM Sans, Helvetica",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22.4px",
    },
    body2: {
      fontFamily: "Inter, Helvetica",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "normal",
    },
    button: {
      fontFamily: "Inter, Helvetica",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "normal",
      textTransform: "none",
    },
    caption: {
      fontFamily: "Inter, Helvetica",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "normal",
    },
    overline: {
      fontFamily: "Inter, Helvetica",
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "normal",
      letterSpacing: "0.5px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "25.5px",
          padding: "12px",
          minWidth: "51px",
          height: "48px",
        },
        containedPrimary: {
          backgroundColor: "#51C41B",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#45A817",
          },
        },
        containedError: {
          backgroundColor: "#FF3A3A",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#E03333",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            border: "1px solid #D6E4EC",
            "& fieldset": {
              borderColor: "#D6E4EC",
            },
            "&:hover fieldset": {
              borderColor: "#D6E4EC",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#51C41B",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.06)",
          borderRadius: "8px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFFFFF",
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

export const TransactionFilterSection = () => {
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
                  <Typography variant="body1" color="text.secondary">
                    {transaction.name}
                  </Typography>
                </Box>

                <Box sx={{ width: "147px", ml: 3 }}>
                  <Typography variant="body1" color="text.secondary">
                    {transaction.category}
                  </Typography>
                </Box>

                <Box sx={{ width: "112px", ml: 1 }}>
                  <Typography variant="body1" fontWeight="600">
                    {transaction.date}
                  </Typography>
                </Box>

                <Box sx={{ width: "123px", ml: 1 }}>
                  <Typography variant="body1" fontWeight="600" color="#6b6f7b">
                    {transaction.amount}
                  </Typography>
                </Box>

                <Box sx={{ ml: "auto", mr: 2 }}>
                  <MoreVertIcon sx={{ color: "text.secondary" }} />
                </Box>
              </Stack>
            </ListItem>

            {index < transactions.length - 1 && (
              <Divider sx={{ bgcolor: "divider" }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};