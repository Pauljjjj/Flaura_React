import React, { useState } from 'react';
import { MenuItems4 } from './MenuItems4';
import { Link } from 'react-router-dom'; 
import '../components/CSS/Dropdown.css';
import '../components/CSS/Titre.css';

function Dropdown4 () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems4.map((item, index) => {
                    return(
                        <li className='text-title2' key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown4;