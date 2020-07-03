import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api/'

import { NativeSelect, FormControl } from '@material-ui/core'

function CountryPicker({handleCountryChange}) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries())
    }
    fetchApi()
  }, [setCountries])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;