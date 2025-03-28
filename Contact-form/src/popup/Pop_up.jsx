import React from 'react'

function Pop_up() {
  return (
    <div className='flex flex-col w-fit h-fit bg-Grey900 p-5 rounded-lg absolute top-5'>
        <div className='text-white flex w-full items-center'>
            <span className='mr-2'>
                <img src="./src/assets/images/icon-success-check.svg" alt="icon" />
            </span>
            <h1>Message Sent!</h1>
        </div>
        <p className=' text-white mt-3'> Thanks for completing the form. We'll be in touch soon! </p>
    </div>
  )
}

export default Pop_up
