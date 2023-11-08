import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSign = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const updateUser = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      const loggedEmail = currentUser?.email || user?.email;
      const loggedUser = { email: currentUser?.email };
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("https://foodie-pal-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("https://foodie-pal-server.vercel.app/logout", loggedEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  });

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log("observing current user!");
  //     setLoading(false);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    googleSign,
    logOut,
    loading,
    setLoading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
