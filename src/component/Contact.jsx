import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full bg-[#0a192f] flex justify-center items-center  py-[130px] p-4'>
<form method="POST" action="https://getform.io/f/navvvnna" className='flex flex-col max-w-[600px] w-full '>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-purple-900 text-[#f3e2fc]'>Contact</p>
        <p className='text-purple-300 py-4'>// Sumbit the form below or shoot me an email - somtochukwuanthony@gmail.com</p>
    </div>
    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
    <textarea className='bg-[#ccd6f6] p-2' name="message"rows={10} placeholder='Message' ></textarea>
    <button className='text-white border-2 hover:bg-purple-900 hover:border-purple-900 px-4 py-3 my-8 mx-auto flex items-center'>
        Let's Collaborate</button>
</form>
    </div>
  )
}

export default Contact 