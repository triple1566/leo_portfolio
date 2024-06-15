import React from 'react'

const Contacts = () => {
  return (
    <div className='max-width-screen-lg w-full h-full'>
      <div className='flex flex-col w-[90%] h-full p-4 mx-auto sm:w-[80%] justify-center items-center text-[#0c0e3e]'>
      <p className='text-[30px] font-bold sm:text-[40px]'>Contact me:</p>
      <p className='text-[19px] font-semibold sm:text-[24px]'>Lets get in touch!</p>
      </div>

      <div className='flex w-[90%] h-full items-center justify-center p-4 mx-auto sm:w-[80%]'>
        <form action="" className='flex flex-col'>
          <input type="text"
          name='name'
          placeholder='Enter your name'
          className='p-2 bg-gray-100 border-1 rounded-md text-[#0c0e3e] focus:outline-none'/>

          <input type="text"
          name='email'
          placeholder='Enter your email'
          className='p-2 bg-gray-100 border-1 rounded-md text-[#0c0e3e] focus:outline-none'/>
          
          <textarea name="message" rows="10"
          className='p-2 bg-gray-100 border-1 rounded-md text-[#0c0e3e] focus:outline-none'>
          </textarea>
          <button className='text-white bg-gray-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300 hover:bg-gradient-to-br from-[#ff8eb6] to-[#ff0062]'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts
