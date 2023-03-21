import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const OAuth = () => {
  const navigate = useNavigate()

  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not sign up with Google! Please recheck!")
    }
  }
  return (
    <button type="button"
    onClick={onGoogleClick}
    className="w-full bg-red-700 
    flex justify-center items-center
    text-white px-7 py-3 uppercase text-sm font-medium
    hover:bg-red-800
    active:bg-red-900 shadow-md
    hover:shadow-lg
    active:shadow-lg
    transition duration-200 ease-in-out rounded">
      <FcGoogle className="mr-3 text-xl"/>
      Continue With Google
    </button>
  );
};

export default OAuth;
