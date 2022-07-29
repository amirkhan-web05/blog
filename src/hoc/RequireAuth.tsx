import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks'

type ReactNode = React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;

export const RequireAuth = ({children}:any) => {
  const auth = useAppSelector(state => state.auth.auth)

  if (!auth) {
    return <Navigate to='/users'/>
  }

  return (
    <>
      {children}
    </>
  )
}
