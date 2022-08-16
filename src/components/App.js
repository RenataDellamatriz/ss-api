import '../styles/App.css';
import Button from '@mui/material/Button'
import {useState} from 'react'
//imports
//setar constantes

function App() {
  //useState hook
  const [score,setScore] = useState(0)
  //declarar e trabalhar com variáveis como js normalmente

  function increment (){
    setScore(score + 1)
  }
  return (
   //código HTML que será exportado do componente
   <Button onClick={increment}>{score}</Button>
  );
}

export default App;
