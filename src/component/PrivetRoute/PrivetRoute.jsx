import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

function PrivetRoute({children}) {
    const {user}=useContext(AuthContext)
    const location = useLocation()
    if (user) {
       return children 
    } else {
       return <Navigate to='/recipies/login' state={{from: location}}></Navigate> 
    }
 
}

export default PrivetRoute