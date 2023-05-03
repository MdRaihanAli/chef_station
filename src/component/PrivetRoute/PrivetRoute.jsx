import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

function PrivetRoute({children}) {
    const {user, loding}=useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <div className='text-center mt-5'> 
            <Spinner animation="border" variant="primary" />
            
        </div>
    }
    if (user) {
       return children 
    } else {
       return <Navigate to='/recipies/login' state={{from: location}} replace></Navigate> 
    }
 
}

export default PrivetRoute