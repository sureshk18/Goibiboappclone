import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [user, setUser] = useState([]);

    const Flights = async () => {
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"FLIGHTS"}', {
                headers: {
                    projectId: 'ge5upq3e1s5h'
                }
            });
            const json = response.data;
            console.log(json.data.offers);
            setUser(json.data.offers);
        } catch (err) {
            console.log('Error:', err);
        }

    };
    useEffect(() => {
        Flights()
    }, []);

    return (
        <div style={{ padding: '90px' }}>
            <p>hello welcome to flight search page</p>
            {user.map((offer, index) => (
                <div key={index}>
                    <img src={offer.heroUrl} />
                    <h1 style={{ marginTop: '90px' }}>{offer.ctaText}</h1>
                </div>
            ))}
        </div>
    )
}

export default Search