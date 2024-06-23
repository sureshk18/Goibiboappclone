import React from 'react'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Cab_page = () => {
    return (
        <div className=''>
            <div className='w-10/12 m-auto'>
                <h1 className='font-bold text-2xl my-4 relative text-black z-20'>Book Online Cab</h1>
                <div>
                    <label htmlFor='p-2' className='p-2'>
                        From
                    </label>
                    <select 
                    name='' 
                    id='' 
                    className='border p-2 my-2 mx-2 rounded-lg'
                    >
                    </select>
                    <label htmlFor='' id=''>
                        To
                    </label>
                    <select name='' id='' className='border p-2 my-2 rounded-lg'>

                    </select>
                    <div></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                        label = "check-In"
                        disablePast
                        reduceAnimations
                        minDate={new dayjs()}
                        maxDate={new dayjs().add(-1,"day").add(1,"year")}
                        // value={depDate}
                        
                        >

                        </DatePicker>
                    </LocalizationProvider>


                </div>
            </div>
        </div>
    )
}

export default Cab_page
