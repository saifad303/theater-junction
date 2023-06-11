import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import axios from "axios";

const AuthContext = createContext(null);

export const useAuthProvider = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [studentClassList, setStudentClassList] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const apiPrefixLink = "http://localhost:5000/";

  const googleSignInProviderHandler = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutProviderHandler = () => {
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  const createUserProvider = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileProvider = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const signInWithEmailProvider = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setTokenLocalStorage = (token) => {
    localStorage.setItem("access-token", `bearer ${token}`);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedInUser(user);
        setIsLoading(false);
      } else {
        setSignedInUser(null);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    setTokenLocalStorage,
    apiPrefixLink,
    googleSignInProviderHandler,
    signedInUser,
    setSignedInUser,
    signOutProviderHandler,
    isLoading,
    setIsLoading,
    createUserProvider,
    updateProfileProvider,
    signInWithEmailProvider,
    setStudentClassList,
    studentClassList,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
