import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from '../auth/pages/Login';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRout } from './PublicRout';

export const AppRouters = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>
            
        </Routes>
    </>
  )
}
