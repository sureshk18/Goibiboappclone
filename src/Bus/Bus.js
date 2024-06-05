import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../Bus/bus.css'
import { type } from '@testing-library/user-event/dist/type';
import { Source } from '@mui/icons-material';

function Bus() {
    const [source, setSource] = useState("Mumbai");
    const [destination, setDestination] = useState("Faridabad");


    const config = {
        headers: {
            projectId: "ge5upq3e1s5h",
        },
    };
    const busData = async () => {
        try {
            const res = await axios.get(
                `https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"","destination":""}&day=Mon`,
                config
            );
            console.log(res);
            // setHotelData(res);
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        // setLocation(hotelSearchRef.current.value);
        busData();
    }, []);


    


    
    return (
        <section className='hotel-container'>
            <div className="hotel-details">
                <div className="bc-Hotel-Iage1"></div>
                <div className="bc-Hotel-Iage2"></div>
                <div className="book-hotel-content">Bus Ticket Booking</div>
                <section className='hotels-card bus'>
                    <div className='hotel-shadow-box bus-card-container'>
                        <div className='bus-svvchx'>
                            <span className='bKYeCc'>From</span>
                            <div className='iySGfO'>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Bus