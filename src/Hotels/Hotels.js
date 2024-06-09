// /* eslint-disable jsx-a11y/alt-text */
// import axios from 'axios'
// import "../Hotels/Hotels.css";
// import background from "../assests/background.svg";
// import React, { useEffect, useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';


// function Hotels() {


//     return (
//         <section className='hotels-container'>
//             <img className="bg-img" src={background} />
//             <div className='hotel-details'>
//                 <div className='background-1'></div>
//             <div className='background-2'></div>
//                 <div className='hotel-content'>Book Hotels & Homestays</div>
//                 <section className='hotel-card'>
//                     <div className='hotel-box'>
//                         <div className='radio-btn'>
//                             <div>
//                                 <input type='radio' name='one-way' id='one-way' checked />
//                                 <label for="one-way">India</label>
//                             </div>
//                             <div>
//                                 <input type='radio' name='one-way' id='round-trip' />
//                                 <label for="round-trip">International</label>
//                             </div>
//                         </div>
//                         <div className='searchblock'>
//                             <span className='where'>Where</span>
//                             <div className='place-search'>
//                                 <SearchIcon />
//                                 <input type='text' placeholder='Delhi' className='input-search' />
//                             </div>
//                             <div className='date-picker'>
//                                 <div className='picker'>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </section>
//     )
// };

// export default Hotels

import '../Hotels/Hotels.css';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import HotelSearch from './HotelSearch';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import BasicDateRangePicker from '../Hotels/DatePicker';
import HotelSearch from '../Hotels/HotelSearch';
import { useNavigate } from 'react-router-dom';



const Hotels = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate()
  const searchHotel = () => {
    // HotelSearch();
    navigate('/hotelsearch')
  }
  return (
    <><div>
      <section className='hotels-container' style={{ marginTop: '60px' }}>
        <div className='hotel-details'>
          <div className='book-hotel-content'>Book Hotels & Homestays</div>
          <section className='hotels-card'>
            <div className='hotel-shadow-box'>
              <div className='radio-btn'>
                <div>
                  <input
                    type="radio"
                    name="one-way"
                    id="one-way"
                    defaultChecked
                  />
                  <label htmlFor="one-way">India</label>
                </div>
                <div>
                  <input type="radio" name="one-way" id="round-trip" disabled />
                  <label htmlFor="round-trip">International</label>
                </div>
              </div>
              <div className='city-search'>
                <span className='city-search'>Where</span>
                <div className='searchInput'>
                  <SearchIcon />
                  <input type='text' placeholder='DELHI' />
                </div>
              </div>
              <div className='date-picker'>
                <LocalizationProvider>
                  <BasicDateRangePicker date={date} setDate={setDate} />
                </LocalizationProvider>
              </div>
              <div>
                <div className='guest-room'>
                  <div className='guest-room'>Guests & Rooms</div>
                </div>
                <div className='guest-detail'>
                  <input type='text' className='guest' value="3 Adults | 0 Child | 1 Room " />
                </div>
              </div>

            </div>
            <button className='search-btn' onClick={searchHotel}>SEARCH</button>
          </section>
        </div>

      </section>
    </div>
    </>
  )
}

export default Hotels
