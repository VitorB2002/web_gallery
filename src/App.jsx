import { Box, Typography } from '@mui/material';
import './App.css';
import logo from "./assets/instantaneo.png"

function App() {

  return (
    <Box sx={{
      display: "flex",
      height: "60px",
      alignItems: "center",
      backgroundColor: "#1876d3",
      gap: "25px",
      padding: "10px"
    }}>
      <Box>
        <img src={logo} height={50}/>
      </Box>
      
      <Typography color={"#ffffff"} fontSize={36}>My web Gallery</Typography>
    </Box>
  );
}

export default App;
