import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './Components'
import styles from './App.module.css'
import { fetchData } from './api/'
import Image from './images/image.png'
function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const fetchedData = await fetchData();
      setData(await fetchedData)
    }
    fetch()
  }, [])

  async function handleCountryChange(country){
    const fetchedData = await fetchData(country);
    setData(fetchedData)
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img classImage={styles.image} src={Image} />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart  data={data} country={country}/>
    </div>
  );
}

export default App;
