import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='pb-10'>
            <div className="navbar">
                <div className="flex-1">
                    <ul className='menu menu-horizontal gap-2'>
                        <Link to='/'>
                            <img src="../../public/images/jatri-logo.svg" alt="" />
                        </Link>
                        <Link to='/rental' className='flex flex-row items-center pl-2'>
                            <img src="../../public/images/R.svg" alt="" />
                            <h1 className='pl-3'>Rental</h1>
                        </Link>
                        <li className='flex flex-row items-center'>
                            <img src="../../public/images/B.svg" alt="" />
                            <h1 className='pl-0'>Bus</h1>
                        </li>
                        <li className='flex flex-row items-center'>
                            <img src="../../public/images/L.svg" alt="" />
                            <h1 className='pl-0'>Launch</h1>
                        </li>
                        
                    </ul>
                </div>
                {/* <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li>
                                        <a>Link 1</a>
                                    </li>
                                    <li>
                                        <a>Link 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;