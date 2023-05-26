import React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "./firbase";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
// import { async } from "regenerator-runtime";
// import {doc, setDoc} from "firebase/firestore"
import { ToastContainer, toast } from "react-toastify";


// !creating context

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let auth = getAuth();

  // const collectionRef = collection(db, "users")

  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedRecipes: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    auth.signOut();
    toast.warn("You have logged out");
  }

  // let googleProvider = new GoogleAuthProvider();
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // alert("logged out successfully")
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}
