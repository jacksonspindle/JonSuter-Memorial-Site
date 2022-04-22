import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Style from './style.css'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Gallery from './components/Gallery'



export default function App(){


    const [page, setPageState] = useState([<LandingPage />])


    return (
        <div>
            {page}
            <Nav pageChanger={setPageState} />
        </div>
    )
}