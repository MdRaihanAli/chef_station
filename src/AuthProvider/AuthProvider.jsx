import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loding, setLoding]=useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userLogOut=()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unsribe = onAuthStateChanged(auth, carentUser => {
      setUser(carentUser)
      setLoding(false)
    });
    return () => {
      return unsribe()
    }

  }, [])


  const authInfo = {
    user,
    loding,
    createUser,
    loginUser,
    userLogOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider