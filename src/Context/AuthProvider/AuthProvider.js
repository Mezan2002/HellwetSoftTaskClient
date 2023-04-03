import React, { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    googleLogIn,
    signUpUser,
    userLogIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
