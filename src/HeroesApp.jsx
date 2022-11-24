import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouters } from './router/AppRouters'

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouters/>
    </AuthProvider>
  )
}
