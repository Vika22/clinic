import React, { useState } from 'react'
import AboutBlock from './components/AboutBlock'
import HeroBlock from './components/HeroBlock'
import Specialties from './components/Specialties'
import Services from './components/Services'

const HomePage = () => {
    return (
        <main >
            <HeroBlock />
            <AboutBlock />
            <Specialties />
            <Services />
        </main>
    )
}

export default HomePage
