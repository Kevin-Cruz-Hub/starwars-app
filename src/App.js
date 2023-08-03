import {useState, useEffect} from 'react';
import Sw_api from "./components/services/Sw_api";
import styles from './components/services/Sw_api.module.css'

function App() {
  const [spaceShips, setSpaceShips] = useState([])

  useEffect(() =>{
    const fetchData = async()=>{
        const resp = await fetch('https://swapi.dev/api/starships/')
        const data = await resp.json()
        setSpaceShips(data.results)
        
        console.log(data.results)
      }
    fetchData()
},[setSpaceShips])

  return (
    <div>
      <h1 className={styles.Header}>STAR WARS STARSHIPS</h1>
      <div className={styles.Whole}>
      {spaceShips ?(
        spaceShips.map((item) =><Sw_api name={item.name}/>))
        :(<h3>No spaceShips</h3>)}
      </div>
    </div>
  );
}

export default App;
