import { createTheme, rgbToHex } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f0f0f",  
      paper: "#1a1a1a",    
    },
    primary: {
      main: "#6c47ff",     
    },
    secondary: {
      main: "#9b8cff",
    },
    text: {
      primary: "#f5f5f5",  
      secondary: "#d1d1d1",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    code: { fontFamily: "'JetBrains Mono', monospace" },
    button: { textTransform: "none" },
    xpTitle: { fontFamily: "'JetBrains Mono'", fontWeight: 100, fontSize:'1.2rem', color:'rgb(236, 191, 106)'},

  },


});

export default theme;
