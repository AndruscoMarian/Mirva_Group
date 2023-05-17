import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

  return (
    <>
        <nav className="nav-bar bg-zinc-800 w-full h-12 px-8 flex items-center justify-center fixed top-0 left-0 right-0 text-gray-400 text-base shadow-xl">
            <div className="h-full w-full navbar-container flex justify-between items-center ">
              
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='w-auto flex flex-col'>
                        <li className="flex justify-center w-full p-4 btn-hover-effect-hide  cursor-pointer">
                            <Link to='/group' onClick={closeMobileMenu} className='' >
                                Group
                            </Link>
                        </li>
                        <li className="flex justify-center w-full p-4 mb-1 btn-hover-effect-hide  cursor-pointer">
                            <a 
                            href='https://www.facebook.com/mirvatravel' 
                            className='nav-links' 
                            target="_blank" 
                            onClick={closeMobileMenu}>
                                <i class="fab fa-facebook-square mr-2"></i> Mirva Facebook
                            </a>
                        </li>
                        <li className="flex justify-center w-full p-4 mb-1 btn-hover-effect-hide  cursor-pointer">
                            <a 
                            href='#' 
                            className='nav-links' 
                            target="_blank" 
                            onClick={closeMobileMenu}>
                                <i class="fab fa-instagram mr-2"></i>Mirva Instagram
                            </a>
                        </li>
                        <li className="flex justify-center w-full p-4 mb-1 btn-hover-effect-hide  cursor-pointer">
                            <a 
                            href='#' 
                            className='nav-links' 
                            target="_blank" 
                            onClick={closeMobileMenu}>
                                <i className="fas fa-map-marker-alt mr-2"></i>Mirva Location
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className='w-48 h-auto links flex flex-row justify-start'>
                    <li className="btn-hover-effect p-2 cursor-pointer h-12">
                        <a 
                        href='https://www.facebook.com/mirvatravel' 
                        className='' 
                        target="_blank" 
                        onClick={closeMobileMenu}>
                            <i class="fab fa-facebook-square text-lg"></i>
                        </a>
                    </li>
                    <li className="btn-hover-effect p-2 cursor-pointer h-12">
                        <a 
                        href='#' 
                        className='' 
                        target="_blank" 
                        onClick={closeMobileMenu}>
                            <i class="fab fa-instagram text-lg"></i>
                        </a>
                    </li>
                    <li className="btn-hover-effect p-2 cursor-pointer h-12">
                        <a 
                        href='#' 
                        className='' 
                        target="_blank" 
                        onClick={closeMobileMenu}>
                            <i className="fas fa-map-marker-alt text-lg"></i>
                        </a>
                    </li>
                </ul>
                
                <Link to='/' className="w-48 h-12 text-center btn-hover-effect mirva p-2 text-xl font-semibold">
                    <i className="fab fa-magento mr-2 text-xl"></i> Mirva
                </Link>

                <div className="burger menu-icon w-48 h-auto hidden cursor-pointer justify-center" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                
                <div className='groupSimple w-48 text-right flex flex-col justify-center'>
                    <Link to='/group' className='btn-hover-effect h-12 p-2'>
                        Group
                    </Link>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;