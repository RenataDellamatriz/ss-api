import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import background from "../media/background-spotify-spotter.png";
import logo from "../media/Logo-Spotify.png"

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        display:'flex'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#00F388",
            fontSize: "35px",
            border: "2px solid",
            borderRadius: "40px",
            width: "400px",
            textAlign: "center",
            padding: "19px",
            margin: "60px",
            "@media (max-width: 500px)": {
              color: "red",
            },
          }}
        >
          SPOTIFY <strong>SPOTTER</strong>
        </Typography>

        <Typography
          sx={{
            color: "#FCFBFC",
            fontSize: "60px",
            marginTop:'90px',
            marginLeft:'60px'
          }}
        >
          HOW WELL DO YOU
          <Typography
            component={"span"}
            sx={{
              display: "block",
              color: "#FCFBFC",
              fontSize: "60px",
            }}
          >
            KNOW YOUR MUSIC?
          </Typography>
        </Typography>
        <Typography 
        sx={{
          color:'#494466',
          fontSize:'30px',
          marginTop:'20px',
          marginLeft:' 60px'
          }}>TEST YOUR KNOWLEDGE
          </Typography>
          <Button  
          variant="outlined" 
          sx={{
            color:'#00F388',
            fontSize:'30px',
            border:'2px solid',
            borderRadius:'15px',
            width:'250px',
            height:'70px',
            marginTop:'30px',
            marginLeft:'60px',
            '&:hover':{
              backgroundColor:'#00F388',
              color:'#070125',
              borderColor:'#00F388'
            }
          }}>
            PLAY
          </Button>
      </Box>
      <Box 
      component="img" 
      src={logo}
      sx={{
        marginTop:'20px',
        marginLeft:'40px'
      }}>

      </Box>
    </Box>
  );
}

export default App;
