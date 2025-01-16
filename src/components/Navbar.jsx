import React, { useState } from 'react'

//images
import logoStoremesh from '../assets/LOGO_digital storemesh.png'
import iconSearch from '../assets/icon_search.svg'
import icon9dots from '../assets/icon_dots_nine_bold.svg'
import iconburger from '../assets/icon_burger_nav.svg'
import { use } from 'react'


function Navbar() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            {/*large screen*/}
            <div className='hidden md:block'>

                <nav className='bg-blue-500 p-2'>
                    <div className='container mx-auto flex justify-between items-center'>

                        <div className='container mx-auto flex items-center'>
                            <img src={logoStoremesh} alt="logoStoremesh" width={200} className='mx-5' />
                            <ul className='flex space-x-4'>
                                <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>Products</a></li>
                                <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>About</a></li>
                                <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>Contact</a></li>
                            </ul>
                        </div>

                        {/* search box  */}
                        <div className='flex justify-start py-2 bg-white md:w-auto w-60 h-10 rounded-md'>
                            <img src={iconSearch} alt="iconSearch" width={20} className='mx-1' />
                            <input type="text" placeholder='Search' className='rounded-md outline-none w-full' />
                        </div>

                        {/* icons */}
                        <div className='flex items-center px-3 py-2 w-auto h-10'>
                            <a href="#">
                                <img src={icon9dots} alt="icon9dots" width={50} />
                            </a>
                            <div className='bg-blue-200 rounded-full'>
                                <p className='text-2xl text-center w-10 h-10'>A</p>
                            </div>
                        </div>


                    </div>
                </nav>

            </div>
            {/*small screen*/}
            <div className='md:hidden block'>

                <nav className='bg-blue-500 p-2'>
                    <div className='container mx-auto flex justify-between items-center'>

                        <div className='container mx-auto flex items-center'>
                            <img src={logoStoremesh} alt="logoStoremesh" width={200} className='mx-5' />
                            <ul className='hidden md:flex space-x-4'>
                                <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>Products</a></li>
                                <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>About</a></li>
                                <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>Contact</a></li>
                            </ul>
                        </div>

                        {/* search box  */}
                        <div className='flex justify-end py-2 md:w-auto w-60 h-10 rounded-md'>
                            <img src={iconSearch} alt="iconSearch" width={20} className='mx-1' />
                            <input type="text" placeholder='Search' className='hidden' />
                        </div>

                        {/* icons */}
                        <div className='flex' onClick={()=>setToggle((prevValue)=>!prevValue)}>
                            <a href="#">
                                <img src={iconburger} alt="iconBurger" width={50} />
                            </a>
                        </div>


                    </div>


                    {/*Side menu */}
                    {toggle ?
                            <div className='container my-2 p-2 w-full h-[100px] bg-blue-500 overflow-hidden'>
                                <ul className='justify-end items-end'>
                                    <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>Products</a></li>
                                    <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>About</a></li>
                                    <li><a href="#" className='text-white text-lg hover:bg-blue-800 p-2 active:bg-gray-700'>Contact</a></li>
                                </ul>
                            </div>  
                    :
                    ""
                    }
                </nav>
            </div>
        </>
    )
}

export default Navbar
