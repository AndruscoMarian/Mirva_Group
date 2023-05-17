import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'


function Footer() {

  return (
    <>
        <div className="footer w-full h-auto bg-zinc-800 absolute bottom-0 left-0 right-0 flex justify-center px-8">
            <ul className='btns footer-container flex justify-between flex-wrap w-full text-gray-400 h-auto'>
                <Link to='/contacts' className='h-auto'>
                    <li className='w-52 h-12 text-Left btn cursor-pointer text-base py-2'>
                    Contacts
                    </li>
                </Link> 
                <Link to='/contacts' className='h-auto'>   
                    <li className='w-52 h-12 text-center btn cursor-pointer text-base py-2'>
                    Privacy Politics
                    </li>
                </Link> 
                <Link to='/contacts' className='h-auto'> 
                    <li className='w-52 h-12 text-right btn cursor-pointer text-base py-2'>
                    Terms and Conditions
                    </li>
                </Link>   
            </ul>
        </div>
    </>
    );
}

export default Footer;
