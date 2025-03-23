import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    MenuItem,
    Modal,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const PemasukanBaru = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        category: "",
        amount: "",
        account: "Dompet",
        date: "22/04/2025",
        time: "23:59",
        source: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving data...", formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 600,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" fontWeight="bold" color="#292929" mb={4}>
                    Pemasukan Baru
                </Typography>

                <Stack spacing={3}>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" fontWeight={600} color="primary.main">
                            Kategori
                        </Typography>
                        <Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            displayEmpty
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value="" disabled>
                                Pilih Kategori
                            </MenuItem>
                        </Select>
                    </FormControl>
                    
                    <TextField
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">Rp</InputAdornment>,
                        }}
                        fullWidth
                    />

                    <FormControl fullWidth>
                        <Typography variant="subtitle1" fontWeight={600} color="primary.main">
                            Rekening
                        </Typography>
                        <Select
                            name="account"
                            value={formData.account}
                            onChange={handleChange}
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value="Dompet">Dompet</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        name="source"
                        label="Sumber Dana"
                        value={formData.source}
                        onChange={handleChange}
                        fullWidth
                    />

                    <Stack direction="row" spacing={2}>
                        <TextField
                            name="date"
                            label="Tanggal"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <TextField
                            name="time"
                            label="Waktu"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </Stack>

                    <TextField
                        name="notes"
                        label="Catatan (Opsional)"
                        multiline
                        minRows={4}
                        value={formData.notes}
                        onChange={handleChange}
                        fullWidth
                    />

                    <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
                        <Button variant="text" onClick={onClose} sx={{ color: "#2E7D32" }}>
                            Batal
                        </Button>
                        <Button variant="contained" onClick={handleSave} sx={{ bgcolor: "#2E7D32" }}>
                            Simpan
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    );
};