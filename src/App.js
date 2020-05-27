import React, {useState, useEffect} from 'react'; 

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/image.png';

const App = () => {
    const [data, setData] = useState({}); 
    const [country, setCountry] = useState();
    
    useEffect(() => {
        async function loadData() {
            const data = await fetchData();
            setData({data}); 
        }
        loadData();

    }, []);

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setCountry(country);
        setData(fetchedData);
    }
        
    return (
        <div className = {styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    ); 
}

export default App; 