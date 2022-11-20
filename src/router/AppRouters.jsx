import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from '../auth/pages/Login';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouters = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path='/*' element={<HeroesRoutes/>}/>
        </Routes>
    </>
  )
}
