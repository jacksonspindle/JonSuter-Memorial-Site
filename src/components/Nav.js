import React from 'react'
import Gallery from './Gallery'

export default function Nav({pageChanger}) {
    return (
        <div>
            <nav className='nav'>
                <ul className='navList'>
                    <li onClick={() => {pageChanger([<Gallery />])}}>Photos</li>
                    <li>Words</li>
                    <li>Suter's Work</li>
                </ul>
            </nav>
        </div>
    )
}