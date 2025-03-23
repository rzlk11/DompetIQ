import CalendarIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const PreferencesSection = () => {
  // Data for filter options
  const filterTypes = [
    {
      id: "expense",
      label: "Pengeluaran",
      icon: "https://c.animaapp.com/TOoAOvTf/img/vector.svg",
    },
    {
      id: "income",
      label: "Pemasukan",
      icon: "https://c.animaapp.com/TOoAOvTf/img/vector-36.svg",
    },
    { id: "debt", label: "Hutang / Kredit", icon: "" },
  ];

  return (
    <Box sx={{ width: 212, height: 351 }}>
      <Card
        sx={{ height: "100%", boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.06)" }}
      >
        <CardContent sx={{ p: 0 }}>
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", px: 2, py: 1 }}>
            <SettingsIcon sx={{ fontSize: 12, mr: 1, color: "primary.dark" }} />
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "'DM_Sans', Helvetica",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "1px",
                color: "#00140e",
              }}
            >
              Saring
            </Typography>
          </Box>

          <Divider sx={{ backgroundColor: "#d6e4ec" }} />

          {/* Filter Form */}
          <Box sx={{ p: 2 }}>
            {/* Date Field */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Inter', Helvetica",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  color: "primary.dark.500",
                  mb: 0.5,
                }}
              >
                Tanggal
              </Typography>
              <TextField
                placeholder="dd/mm/yyyy"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarIcon sx={{ fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: 10,
                    fontFamily: "'Poppins', Helvetica",
                    color: "secondary.grey",
                    height: 30,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d6e4ec",
                    },
                  },
                }}
              />
            </FormControl>

            {/* Category Field */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Inter', Helvetica",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  color: "primary.dark.500",
                  mb: 0.5,
                }}
              >
                Kategori
              </Typography>
              <Select
                displayEmpty
                size="small"
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  height: 30,
                  fontSize: 10,
                  fontFamily: "'Poppins', Helvetica",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d6e4ec",
                  },
                }}
              >
                <MenuItem value="">
                  <Typography sx={{ fontSize: 10 }}>{""}</Typography>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Account Field */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Inter', Helvetica",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  color: "primary.dark.500",
                  mb: 0.5,
                }}
              >
                Rekening
              </Typography>
              <Select
                displayEmpty
                size="small"
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  height: 30,
                  fontSize: 10,
                  fontFamily: "'Poppins', Helvetica",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d6e4ec",
                  },
                }}
              >
                <MenuItem value="">
                  <Typography sx={{ fontSize: 10 }}>{""}</Typography>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Notes Field */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Inter', Helvetica",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  color: "primary.dark.500",
                  mb: 0.5,
                }}
              >
                Catatan
              </Typography>
              <TextField
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    height: 30,
                    fontSize: 10,
                    fontFamily: "'Poppins', Helvetica",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d6e4ec",
                  },
                }}
              />
            </FormControl>

            {/* Type Field */}
            <FormControl component="fieldset">
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Inter', Helvetica",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  color: "primary.dark.500",
                  mb: 0.5,
                }}
              >
                Tipe
              </Typography>
              <RadioGroup>
                {filterTypes.map((type) => (
                  <FormControlLabel
                    key={type.id}
                    value={type.id}
                    control={<Radio size="small" sx={{ p: 0.5 }} />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {type.icon && (
                          <Box
                            component="img"
                            src={type.icon}
                            alt={type.label}
                            sx={{ width: 12, height: 15, mr: 1 }}
                          />
                        )}
                        <Typography
                          sx={{
                            fontFamily: "'Inter', Helvetica",
                            fontWeight: 400,
                            fontSize: 10,
                            letterSpacing: "0.5px",
                            color: "primary.dark.500",
                          }}
                        >
                          {type.label}
                        </Typography>
                      </Box>
                    }
                    sx={{
                      mx: 0,
                      my: 0.5,
                      "& .MuiFormControlLabel-label": {
                        ml: -0.5,
                      },
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
