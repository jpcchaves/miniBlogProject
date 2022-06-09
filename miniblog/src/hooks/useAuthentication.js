import { db } from "../firebase/config";

// Auth hook
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

// useState and useEffect
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup to deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  //   firebase getAuth func
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //   createUser  async func
  // Register
  const createUser = async (data) => {
    //   cheking if its cancelled
    checkIfIsCancelled();
    // setting load to true
    setLoading(true);
    // error empty
    setError(null);

    //   trying to create user
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde.";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // Logout - signout

  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  //   Avoiding memory leak
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
  };
};
