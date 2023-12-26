import React, {useState} from 'react';
import { createClient } from 'pexels';
import { Box, Button, Container, Grid, InputAdornment, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "./assets/instantaneo.png"
import buscando from "./assets/buscando.gif"
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('')
  const [gallery, setGallery] = useState([])
  const client = createClient('MUDPQkKEMfvgHVnhWoGKLGoc1lPMRcQKZuH3dRBR87Hc3FiLmbuBqAeY');
  const [searching, setSearching] = useState(false)

  async function handleSearch(){
    // Chamada da API
    await client.photos.search({
      query: searchText, per_page: 15, locale: 'pt-BR', orientation: 'square'
    }).then(photos => {
      setGallery(photos.photos)
    }).catch(response => {console.log(response)});
    setSearching(false)
  }

  const handleTextChange = (event) => {
    setSearching(true)
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
          width: "100%",
          alignItems: "center",
          backgroundColor: "#1876d3",
          gap: "25px",
        }}>
          <Box>
            <img src={logo} height={50}/>
          </Box>
          
          <Typography color={"#ffffff"} fontSize={36}>Polaroid Gallery</Typography>
        </Box>
      </header>
      
      <hero>
        <Container
          sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "25px", marginBottom: "25px", height: "200px"}}
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
            sx={{width: "100%"}}
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
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Grid container gap={10} maxWidth={"75%"} alignContent={"center"} justifyContent={"center"}>
            {gallery.map((photo, index) => (
              <Grid 
                key={index} 
                item
                xs="auto"
                sx={{
                  width: "320px",
                  height: "380px",
                  padding: "15px 15px 80px 15px",
                  border: "2px solid #939393"
                }}
              >
                <img class="polaroid" src={photo.src.original} alt={photo.alt}/>
                <Typography>
                  Fotografo - <a href={photo.photographer_url}>{photo.photographer}</a> <br></br> 
                  <a href={photo.url}>Acesse aqui</a>
                </Typography>
              </Grid>
              ))}
          </Grid>
          {searching ? 
            (
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                Preparando busca
                <img src={buscando}></img>
                pressione "enter" ou aperte na lupa
              </Box>
            ) : 
            (
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                Sem fotos para mostrar, realize uma busca
              </Box>
            )
          }
        </Box>
        
      </main>

      <footer>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "45px",
          backgroundColor: "#1876d3",
        }}>
          <p>Photos provided by <a href="https://www.pexels.com">Pexels</a></p>
        </Box>
      </footer>
    </body>
  );
}

export default App;
