import React from 'react'
import { Navar } from '../../ui'
import { Navigate, Route, Routes } from "react-router-dom";
import { DCPages,MarvelPages,SearchPage,HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navar/>
        <div className='container'>
        <Routes>
            <Route path="/marvel" element={<MarvelPages/>}/>
            <Route path="/dc" element={<DCPages/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/hero/:id" element={<HeroPage/>}/>
            <Route path="/" element={<Navigate to="/marvel"/>}/>
        </Routes>
        </div>
    </>
  )
}
