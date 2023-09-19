import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContent from '../HomeContent/HomeContent'

export default function ContentComponent() {
    return (
        <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='showingmovies' element={<p>showingmovies</p>} />
            <Route path='comingmovies' element={<p>comingmovies</p>} />
            <Route path='signin' element={<p>signin</p>} />
            <Route path='signup' element={<p>signup</p>} />
        </Routes>
    )
}
