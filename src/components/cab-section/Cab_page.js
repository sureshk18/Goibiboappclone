import React from 'react'


const Cab_page = () => {
    return (
        <div className=''>
            <div className='w-10/12 m-auto'>
                <h1 className='font-bold text-2xl my-4 relative text-white z-20'>Cab Booking</h1>
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
                </div>
            </div>
        </div>
    )
}

export default Cab_page
