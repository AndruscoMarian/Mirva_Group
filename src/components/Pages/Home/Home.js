import './Home.css';
import React from 'react'
import Slider from "./Slider/Slider";

function Home(){

    return(
        <div className='w-full h-full'>
            <Slider />
            <div className='about w-full bg-gray-100 text-gray-400 flex justify-center'>
                <div className='about-home h-full flex justify-center flex-row items-center flex-wrap'>
                    <div className='about-left w-1/2 h-full flex justify-center flex-col items-center border-r-2'>
                        <p className='about-us w-3/4 py-4 border-b-2 text-xl uppercase text-zinc-800 font-semibold'>About Us</p>
                        <p className='about-us w-3/4 py-4 text-base'>We love what we do and we do what we love</p>
                    </div>
                    <p className='about-right w-1/2 p-8 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum nibh non tellus faucibus, ut interdum enim tincidunt. Fusce justo tellus, facilisis eget eros non, volutpat feugiat augue. In porttitor efficitur sollicitudin. </p>
                </div>
            </div>
        </div>
    );

}

export default Home;