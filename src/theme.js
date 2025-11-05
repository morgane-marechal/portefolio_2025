import { createTheme } from "@mui/material/styles";

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
      primary: "#ffffff",
      secondary: "#bdbdbd",
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
  },


});

export default theme;
