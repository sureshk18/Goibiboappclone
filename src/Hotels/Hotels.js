import axios from 'axios'
import "../styles/Hotels.css";
import background from "../assests/background.svg";
import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Hotels() {

    const [userData, setUserData] = useState(['']);
    const Hotels = async () => {
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/bookingportals/offers?limit=50', {
                headers: {
                    projectId: 'ge5upq3e1s5h'
                }
            });
            const json = response.data;
            console.log(json.data.offers);
            setUserData(json.data.offers);
        } catch (err) {

            console.log('Error:', err);
        }

    };
    useEffect(() => {
        Hotels()
    }, []);
    return (
        <div className='hotel-container container-margin'>
            <img className="bg-img" src={background} />
            <div className='basic-con'>
                <p>Book Hotels & Homestays</p>
                <div className='search-hotel'>
                    <div className='radio-btn'>
                        <div>
                            <input type='radio' name='one-way' id='one-way' checked />
                            <label for='one-way'>India</label>
                        </div>
                        <div>
                            <input type='radio' name='one-way' id='round-trip' />
                            <label for='round-trip'>International</label>
                        </div>
                    </div>
                    <div className='inpData'>
                        <form className="inputBox">
                            <div className="search-pic-flight">
                                <div className="inp-data-for">
                                    <div>
                                        <p className="flight-so-de">From</p>
                                        <input className="custom-textfield" type="text" placeholder="LOCATION NAME" value="DELHI"></input>
                                    </div>
                                </div>
                                <div className="inp-data-for">
                                    <div>
                                        <p className="flight-so-de">To</p>
                                        <input className="custom-textfield" type="text" placeholder="LOCATION NAME" value="MUMBAI"></input>
                                    </div>
                                </div>
                                <div className="inp-data-for">
                                    <p className="inp-data-for-para date-ppp flight-so-de">Departure</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <button className="kwEZmw dMpVqc flight-search-btn">SEARCH</button>
            </div>
        </div>
    )
};

export default Hotels

{/*
        <section className='hotels-container'>

            <div className='hotel-details'>
                <div className='bc-Hotel-Iage1'></div>
                <div className='bc-Hotel-Iage2'></div>
                <div className='book-hotel-content'>Book Hotels & Homestays</div>
                <section className='hotel-card'>
                    <div className='hotel-shadow-box'>
                        <div className='radio-btn'>
                            <div>
                                <input type='radio' name='one-way' id='one-way' checked />
                                <label for='one-way'>India</label>
                            </div>
                            <div>
                                <input type='radio' name='round-trip' id='round-trip' disabled />
                                <label for='round-trip'>International</label>
                            </div>
                        </div>
                        <div className=' iFQeqy'><span className='wg'>Where</span>
                            <div className='iySGfO'><SearchOutlinedIcon />
                                Delhi</div>
                        </div>
                        <div className='date-picker'>
                            <div className='css-147rllg'>
                                <div className='css-o89z3t'>
                                    <div className='css-oq5g3b'>
                                        <div className='d12'>
                                            <label className='.css-1ald77x'>Check</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
             <section className='section'>
                <div className='search-block'>
                    <div className='search-block2'>

                    </div>
                </div>
            </section> 
             {userData.map((obj, index) => {
                return (
                    <div key={index}>
                        {obj.ctaText}
                    </div>
                )
            })} 
        </section>
        */}