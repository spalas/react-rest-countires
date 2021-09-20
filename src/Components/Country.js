import React from 'react';
import './Country.css'


const Country = (props) => {
    const { name, flag, region, capital, population } = props.country
    console.log(props.country)
    return (
        <div className="country">
            <h2>This is : {name}</h2>
            <img src={flag} alt="" />
            <p> <small> Region : {region}</small></p>
            <h6>this is capital : {capital}</h6>
            <p>This is population:{population}</p>

        </div>
    );
};

export default Country;