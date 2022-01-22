import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'
import './App.css'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                {...item}
            />
        )
    })
    return (
        <div className="main">
            <Navbar />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}