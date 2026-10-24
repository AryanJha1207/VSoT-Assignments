import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Demo() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then()

  }
, [])}