import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (<>
        <ul>
            <li>
                <Link to='/cuntries'>
                    <h1>Asia</h1>
                </Link>
            </li>
            <li>
                <Link to='/Europe'>
                    <h1>Europe</h1>
                </Link>
            </li>
            <li>
                <Link to='/africa'>
                    <h1>Africa</h1>
                </Link>
            </li>
            <li>
                <Link to='/oceania'>
                    <h1>Oceania</h1>
                </Link>
            </li>
            <li>
                <Link to='/americas'>
                    <h1>Americas</h1>
                </Link>
            </li>

        </ul>


    </>
    );
}

export default Nav;
