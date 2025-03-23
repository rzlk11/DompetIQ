import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Box,
    Button,
    Checkbox,
    Fab,
    FormControl,
    FormControlLabel,
    InputAdornment,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

export const PengeluaranBaru = () => {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [account, setAccount] = useState("Dompet");
    const [isChecked, setIsChecked] = useState(true);
    const [date, setDate] = useState("22/04/2025");
    const [time, setTime] = useState("23:59");
    const [recipient, setRecipient] = useState("");
    const [notes, setNotes] = useState("");

    const handleSave = () => {
        // Handle save functionality
        console.log("Saving data...");
    };

    const handleCancel = () => {
        // Handle cancel functionality
        console.log("Cancelling...");
    };

    const handleAddItem = () => {
        // Handle add item functionality
        console.log("Adding item...");
    };

    return (
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
            <Box width="1020px" position="relative" p={4}>
                <Typography
                    variant="h2"
                    fontFamily='"DM Sans", Helvetica'
                    fontWeight="bold"
                    color="#292929"
                    mb={4}
                >
                    Pengeluaran Baru
                </Typography>

                <Stack spacing={4}>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily='"Inter", Helvetica'
                            fontWeight="600"
                            color="primary.main"
                            mb={1}
                        >
                            Kategori
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <FormControl fullWidth>
                                <Select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    displayEmpty
                                    sx={{
                                        height: "42px",
                                        border: "1px solid #7a7a7a",
                                        fontFamily: '"Inter", Helvetica',
                                        fontSize: "15px",
                                        "& .MuiSelect-select": {
                                            paddingLeft: "12px",
                                        },
                                    }}
                                    IconComponent={KeyboardArrowDownIcon}
                                >
                                    <MenuItem value="" disabled>
                                        <Typography
                                            fontFamily='"Inter", Helvetica'
                                            fontSize="15px"
                                            color="#7a7a7a"
                                        >
                                            Pilih Kategori
                                        </Typography>
                                    </MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <TextField
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    sx={{
                                        width: "319px",
                                        "& .MuiOutlinedInput-root": {
                                            height: "42px",
                                            borderColor: "#7a7a7a",
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Typography
                                                    fontFamily='"Inter", Helvetica'
                                                    fontWeight="600"
                                                    color="primary.main"
                                                    fontSize="20px"
                                                >
                                                    Rp
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily='"Inter", Helvetica'
                            fontWeight="normal"
                            color="primary.main"
                            fontSize="20px"
                            textAlign="right"
                            mr={8}
                        >
                            Total: RP 0
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily='"Inter", Helvetica'
                            fontWeight="600"
                            color="primary.main"
                            mb={1}
                        >
                            Rekening
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <FormControl sx={{ width: "409px" }}>
                                <Select
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                                    sx={{
                                        height: "41px",
                                        border: "1px solid #6b6f7b",
                                        fontFamily: '"Inter", Helvetica',
                                        fontSize: "15px",
                                        "& .MuiSelect-select": {
                                            paddingLeft: "12px",
                                        },
                                    }}
                                    IconComponent={KeyboardArrowDownIcon}
                                >
                                    <MenuItem value="Dompet">Dompet</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                        sx={{
                                            color: "#ff3a3a",
                                            "&.Mui-checked": {
                                                color: "#ff3a3a",
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        fontFamily='"Inter", Helvetica'
                                        fontWeight="normal"
                                        color="primary.main"
                                        fontSize="20px"
                                    >
                                        Dicentang
                                    </Typography>
                                }
                            />
                        </Stack>
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily='"Inter", Helvetica'
                            fontWeight="600"
                            color="primary.main"
                            mb={1}
                        >
                            Tanggal
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                sx={{
                                    width: "409px",
                                    "& .MuiOutlinedInput-root": {
                                        height: "42px",
                                        borderColor: "#7a7a7a",
                                        fontFamily: '"Inter", Helvetica',
                                        fontSize: "15px",
                                        color: "#313a4e",
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        paddingLeft: "12px",
                                    },
                                }}
                            />

                            <Box>
                                <Typography
                                    variant="subtitle1"
                                    fontFamily='"Inter", Helvetica'
                                    fontWeight="600"
                                    color="primary.main"
                                    mb={1}
                                >
                                    Waktu
                                </Typography>
                                <TextField
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    sx={{
                                        width: "320px",
                                        "& .MuiOutlinedInput-root": {
                                            height: "42px",
                                            borderColor: "#7a7a7a",
                                            fontFamily: '"Inter", Helvetica',
                                            fontSize: "15px",
                                            color: "#313a4e",
                                        },
                                        "& .MuiOutlinedInput-input": {
                                            paddingLeft: "12px",
                                        },
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily='"Inter", Helvetica'
                            fontWeight="600"
                            color="primary.main"
                            mb={1}
                        >
                            Kepada (Opsional)
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                                displayEmpty
                                sx={{
                                    height: "42px",
                                    border: "1px solid #7a7a7a",
                                }}
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="">
                                    <em></em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily='"Inter", Helvetica'
                            fontWeight="600"
                            color="primary.main"
                            mb={1}
                        >
                            Catatan (Opsional)
                        </Typography>
                        <TextField
                            multiline
                            minRows={4}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#7a7a7a",
                                },
                            }}
                        />
                    </Box>

                    <Box position="relative" height="40px">
                        <Fab
                            color="error"
                            aria-label="add"
                            size="medium"
                            onClick={handleAddItem}
                            sx={{
                                position: "absolute",
                                right: 0,
                                top: "-10px",
                                bgcolor: "#ff3a3a",
                                width: "51px",
                                height: "48px",
                                borderRadius: "25.5px/24px",
                            }}
                        >
                            <AddIcon fontSize="large" />
                        </Fab>
                    </Box>

                    <Stack direction="row" spacing={2} justifyContent="flex-end" mt={4}>
                        <Button
                            variant="text"
                            onClick={handleCancel}
                            sx={{
                                color: "#ff3a3a",
                                fontFamily: '"Inter", Helvetica',
                                fontWeight: "600",
                                fontSize: "20px",
                            }}
                        >
                            Batal
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            sx={{
                                bgcolor: "#ff3a3a",
                                width: "130px",
                                height: "48px",
                                borderRadius: "8px",
                                fontFamily: '"Inter", Helvetica',
                                fontWeight: "600",
                                fontSize: "20px",
                            }}
                        >
                            Simpan
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};
