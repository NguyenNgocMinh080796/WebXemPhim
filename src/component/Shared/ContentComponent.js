import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContent from '../HomeContent/HomeContent'
import FilmDetailPage from '../../page/FilmDetailPage'
import ErrorComponent from './ErrorComponent'
import SignInPage from '../../page/SignInPage'
import SignUpPage from '../../page/SignUpPage'
import CheckOutPage from '../../page/CheckOutPage/CheckOutPage'

export default function ContentComponent() {
    return (
        <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='showingmovies' element={<p>showingmovies</p>} />
            <Route path='comingmovies' element={<p>comingmovies</p>} />
            <Route path='detail/:id' element={<FilmDetailPage />} />

            <Route path='checkout/:id' element={<CheckOutPage />} />

            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />

            <Route path='*' element={<ErrorComponent />} />
        </Routes>
    )
}
