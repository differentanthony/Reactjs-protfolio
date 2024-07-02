import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-purple-400'>Hi, My Name Is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#f3e2fc]'>Intimacy Anthony</h1>
                <h2 className='text-4xl sm:7xl font-bold text-[#a188b0]'>I'm A Front-end Developer.</h2>
                <p className='text-[#a188b0] py-4 max-w-[700px]'>I'm A Font-end Developer Specailizing In Building (And Occasionally Designing)
                    Exceptional Digital Exprinces. Currently, I'm Focused On
                    Desiging Web Layout In Figma.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-900 hover:border-purple-900'> View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowRight className='ml-3' />
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Home