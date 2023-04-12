import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function Contact({ userRef, listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        console.log("DocSnap ", docSnap);
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  }, [userRef]);

  useEffect(() => {
    console.log(landlord);
  }, [landlord]);

  function onChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      {landlord !== null && (
        <div className="flex flex-col w-full">
          <p className="mt-6">
            Contact <span className="font-semibold">{landlord.name}</span> for
            the {listing.name.toLowerCase()}
          </p>
          <div>
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text- gray-700 my-3 
              bg-white border border-gray-300 rounded transition duration-200
              ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-300"
            ></textarea>
          </div>
          <a
            href={`mailto: ${landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            <button
              type="button"
              className="px-7 py-3 bg-blue-600 text-white rounded text-sm 
            uppercase shadow-md hover:bg-blur-700 hover:shadow-lg w-full"
            >
              Send Message
            </button>
          </a>
        </div>
      )}
    </>
  );
}
