import React from 'react'
import './Error.css'

function NotFound(){

    return(
        <div className='errorPage w-full h-full bg-zinc-800 flex justify-center items-center flex-col'>
            <p className='title1'>#404</p>
            <p className='title2 text-gray-100'>The page doesn't exist or is unavailable</p>
        </div>
    );

}

export default NotFound;