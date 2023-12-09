import React, {useState} from 'react';
import { Box, Typography, TextField, Container, InputAdornment, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import logo from "./assets/instantaneo.png"

function App() {
  const [searchText, setSearchText] = useState('')

  function handleSearch(){
    console.log(searchText)
  }

  const handleTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleKey = (event) => {
    if(event.keyCode === 13){
      handleSearch()
    }
  }

  return (
    <body>
      <header>
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
      </header>
      
      <hero>
        <Container
          sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "25px"}}
        >
          <Box>
            <Typography color={"#565656"} align='center' fontSize={"2em"}>Busque fotos para sua galeria, trabalho ou estudos</Typography>
          </Box>

          <TextField 
            id='searchBox'
            variant='standard'
            label='Palavras chaves'
            placeholder='Ex: dia ensolarado'
            value={searchText}
            onChange={handleTextChange}
            sx={{width: "50%"}}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button 
                    sx={{color: "#565656"}}
                    onClick={handleSearch}
                    >
                    <SearchIcon/>
                  </Button>
                </InputAdornment>
              )
            }}
            onKeyDown={handleKey}
          />
        </Container>

      </hero>

      <main>

      </main>
    </body>
  );
}

export default App;
