import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-[#f3e2fc]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-purple-900'>About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p >Hi. I'm Intimacy, Nice To Meet You. Please Take A Look Around.</p>
                    </div>
                    <div>
                        <p>I Am Passionate About Building Execellent Software That Makes
                            Live Easier. I specialize In Creating Software For Clients Ranging
                            From Individuals And Small-businesses All The Way To Lrage Enterprise
                            Coporations. What Would You If You Had A Software Expert Available At Your Fingertips?
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About