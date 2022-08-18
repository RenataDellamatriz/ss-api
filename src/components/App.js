import "../styles/App.css";
import logo from "./spotify-imagem.png";
import Button from "@mui/material/Button";
import { borderLeft, shadows } from "@mui/system";

//import {useState} from 'react'
//fazer imports
//setar constantes

function App() {
  //useState hook
  //const [score,setScore] = useState(0)
  //declarar e trabalhar com variáveis como js normalmente
  //procurar sobre desestructuring

  function increment() {}
  return (
    //código HTML que será exportado do componente
    
    <body>
      <header>
        <h1 className="header-text">Spotify Game</h1>
        </header>      
      <div className="main">
      <img src={logo}></img>
      <Button
        variant="contained"
        size="large"
        sx={{
          color: "#021403",
          fontFamily: "Gothic A1",
          fontSize: '20px',
          fontStyle: "normal",
          boxShadow:'3px 4px 3px 3px #17371A',
          backgroundColor: "#27AE30",
          height:'50px',
          width:'200px',          
          "&:hover": { backgroundColor: "#1F8E26",
          boxShadow: '3px 4px 3px 3px #17371A' 
        },
        
        }}
      >
        Let's play
      </Button>
      </div>
      <footer>
      <p className="footer-text">&copy;Renatildes</p>
      </footer>
    </body>
  );
}

export default App;
