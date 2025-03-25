import { Container, Grid, Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube, Phone } from "@mui/icons-material";
import footerlogo from "../assets/footer-logo.png";
import footerIDXOJK from "../assets/footer-IDKOJK.png"; // Gambar gabungan OJK dan IDX

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#40AC0B",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={-2} alignItems="center">
          {/* Logo Utama */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ ml: -29 }}>
              <img src={footerlogo} alt="DompetIQ Logo" style={{ height: 60, marginBottom: 7, marginRight: 4 }} />
              <text text style={{ textAlign: "left", marginLeft: "250px" }}>Smart solutions for personal finance <br /> Aplikasi Pengelola Keuangan Pribadi dan Rumah Tangga</text>
            </Box>
          </Grid>

          {/* Navigasi */}
          <Grid item mt={5} md={2}>
            <Box textAlign="Left">
              <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", marginBottom: 2 }}>
                Jelajahi
              </Typography>
              <Typography>
                <a href="#Home" style={{ color: "white", textDecoration: "none" }}>Home</a>
              </Typography>
              <Typography>
                <a href="#Tentang" style={{ color: "white", textDecoration: "none" }}>Tentang</a>
              </Typography>
              <Typography>
                <a href="#Fitur" style={{ color: "white", textDecoration: "none" }}>Fitur</a>
              </Typography>
              <Typography>
                <a href="#Tangkapan-Layar" style={{ color: "white", textDecoration: "none" }}>Tangkapan Layar</a>
              </Typography>
            </Box>
          </Grid>

          {/* Informasi & Kebijakan */}
          <Grid item mt={5} md={4}>
            <Box textAlign="left">
              <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", marginBottom: 2 }}>
                Informasi
              </Typography>
              <Typography>
                <a href="https://api.whatsapp.com/send/?phone=6285804470316&text&type=phone_number&app_absent=0" style={{ color: "white", textDecoration: "none" }}>Hubungi Kami</a>
              </Typography>
              <Typography>
                <a href="#Komunitas" style={{ color: "white", textDecoration: "none" }}>Komunitas</a>
              </Typography>
              <Typography>
                <a href="https://www.iubenda.com/privacy-policy/7794316" style={{ color: "white", textDecoration: "none" }}>Kebijakan Privasi</a>
              </Typography>
              <Typography>
                <a href="#Terms" style={{ color: "white", textDecoration: "none" }}>Terms of Service</a>
              </Typography>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item mt={-1} ml={-25}>
            <Box textAlign="left">
              <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", marginBottom: 2 }}>
                Support
              </Typography>
              <Typography>
                <a href="#PanduanPengguna" style={{ color: "white", textDecoration: "none" }}>Panduan Pengguna</a>
              </Typography>
              <Typography>
                <a href="#Komunitas" style={{ color: "white", textDecoration: "none" }}>Pengumuman</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Logo Gabungan OJK & IDX dan Sosial Media */}
        <Box mt={9}>
          {/* Garis Pemisah */}
          <Box sx={{ borderBottom: "1px solid white", mb: -2, width: "144%", ml: -30 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            {/* Ikon Sosial Media */}
            <Box display="flex" alignItems="center" gap={2} sx={{ marginTop: "25px", marginLeft: "399px" }}>
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                Follow us on:
              </Typography>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
              <IconButton color="inherit">
                <Phone />
              </IconButton>
            </Box>

            {/* Gambar Gabungan OJK & IDX */}
            {/* <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              gap={2}
              sx={{
                marginTop: 2, // Mengatur jarak ke atas
                marginLeft: "50px", // Mengatur jarak ke kiri (gunakan nilai spesifik untuk posisi)
                marginRight: "auto", // Mengatur jarak ke kanan
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "white", marginTop: "15px" }}>
                Sertifikasi dan Akreditasi:
              </Typography>
              <img src={footerIDXOJK} alt="OJK dan IDX Logo" style={{ height: 70 }} />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;