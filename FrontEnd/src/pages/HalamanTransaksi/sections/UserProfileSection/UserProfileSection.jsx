import CalendarToday from "@mui/icons-material/CalendarToday";
import CallMade from "@mui/icons-material/CallMade";
import CallReceived from "@mui/icons-material/CallReceived";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Settings from "@mui/icons-material/Settings";
import {
    Box,
    Card,
    CardContent,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

export const UserProfileSection = () => {
    // Data for the filter options
    const filterTypes = [
        {
            id: "pengeluaran",
            label: "Pengeluaran",
            icon: <CallMade fontSize="small" />,
        },
        {
            id: "pemasukan",
            label: "Pemasukan",
            icon: <CallReceived fontSize="small" />,
        },
    ];

    return (
        <Box sx={{ width: 226, mt: 4 }}>
            <Card
                sx={{
                    width: 212,
                    borderRadius: 2,
                    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.06)",
                }}
            >
                <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Settings fontSize="small" sx={{ mr: 1, width: 12, height: 12 }} />
                        <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            letterSpacing="1px"
                            fontFamily="DM_Sans, Helvetica"
                        >
                            Saring
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    <Box sx={{ mt: 1 }}>
                        <Typography
                            variant="caption"
                            fontWeight="600"
                            letterSpacing="0.5px"
                            fontFamily="Inter, Helvetica"
                        >
                            Tanggal
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="dd/mm/yyyy"
                            variant="outlined"
                            margin="dense"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarToday fontSize="small" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    fontSize: 10,
                                    color: "#6B7280",
                                    fontFamily: "Poppins, Helvetica",
                                    height: 30,
                                    borderColor: "#d6e4ec",
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Typography
                            variant="caption"
                            fontWeight="600"
                            letterSpacing="0.5px"
                            fontFamily="Inter, Helvetica"
                        >
                            Kategori
                        </Typography>
                        <FormControl fullWidth size="small" margin="dense">
                            <Select
                                displayEmpty
                                IconComponent={KeyboardArrowDown}
                                sx={{
                                    height: 30,
                                    fontSize: 10,
                                    fontFamily: "Poppins, Helvetica",
                                    borderColor: "#d6e4ec",
                                }}
                            >
                                <MenuItem value="">
                                    <Typography variant="caption"></Typography>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Typography
                            variant="caption"
                            fontWeight="600"
                            letterSpacing="0.5px"
                            fontFamily="Inter, Helvetica"
                        >
                            Catatan
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            margin="dense"
                            InputProps={{
                                sx: {
                                    fontSize: 10,
                                    fontFamily: "Poppins, Helvetica",
                                    height: 30,
                                    borderColor: "#d6e4ec",
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Typography
                            variant="caption"
                            fontWeight="600"
                            letterSpacing="0.5px"
                            fontFamily="Inter, Helvetica"
                            sx={{ ml: 0 }}
                        >
                            Tipe
                        </Typography>

                        {filterTypes.map((type) => (
                            <Box
                                key={type.id}
                                sx={{ display: "flex", alignItems: "center", ml: 0 }}
                            >
                                {type.icon}
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label={
                                        <Typography
                                            variant="caption"
                                            fontFamily="Inter, Helvetica"
                                            letterSpacing="0.5px"
                                        >
                                            {type.label}
                                        </Typography>
                                    }
                                    sx={{ ml: 1 }}
                                />
                            </Box>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};
