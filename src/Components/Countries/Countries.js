import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>Hello from all Countries: {countries.length}</h2>

            <div className="countries-container">
                {
                    countries.map(country => <Country


                        key={country.capital}
                        country={country}
                    >

                    </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;