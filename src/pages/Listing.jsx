import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Spinner from "../component/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import {
  FaShare,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaParking,
  FaChair,
} from "react-icons/fa";

export default function Listing() {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[400px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            >
              {}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="fixed top-[25%] right-[4%] z-10 bg-white 
       cursor-pointer border-2 border-gray-400 rounded-full  w-12 h-12 
       flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <FaShare className="text-lg text-slate-500" />
        {shareLinkCopied && (
          <p
            className="bg-black fixed top-[20%] right-[4%} z-10 font-semibold border-2
          border-gray-400 rounded-md bg-white p-2"
          >
            Url Copied
          </p>
        )}
      </div>
      <div
        className="m-4 flex flex-col md:flex-row max-w-6xl lg:mx-auto p-4 rounded shadow-lg
      bg-white lg:space-x-5"
      >
        <div className="w-full h-[200px] lg-[400px] ">
          <p
            className="text-2xl font-bold mb-3 text-blue-900
          "
          >
            {listing.name} - ${" "}
            {listing.offer
              ? listing.discountedPrice
                  ?.toString()
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  ?.toString()
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" ? " / month" : ""}
          </p>
          <p className="flex items-center mt-6 mb-3 font-semibold">
            <FaMapMarkerAlt className="text-green-700 mr-1" />
            {listing.address}
          </p>
          <div className="flex justify-start items-center space-x-4 w-[75%]">
            <p
              className="bg-red-800 w-full max-w-[200px] rounded-md p-1 
            text-white text-center font-semibold shadow-md"
            >
              {listing.type === "rent" ? "For Rent" : "For Sale"}
            </p>
            <p
              className="bg-green-800 w-full max-w-[200px] rounded-md p-1
            text-white text-center font-semibold shadow-md"
            >
              {listing.offer && (
                <p>
                  ${+listing.regularPrice - +listing.discountedPrice} discount
                </p>
              )}
            </p>
          </div>
          <p className="my-3">
            <span className="font-semibold">Description - </span>
            {listing.description}
          </p>
          <ul className="flex items-center space-2 sm:space-x-10 text-sm font-semibold">
            <li className="flex items-center whitespace-nowrap">
              <FaBed className="text-lg mr-2" />
              {+listing.bedroom > 1 ? `${listing.bedroom} Beds` : "1 Bed"}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaBath className="text-lg mr-2" />
              {+listing.bathroom > 1 ? `${listing.bathroom} Baths` : "1 Bath"}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaParking className="text-lg mr-2" />
              {listing.parking ? "Parking spot" : "No parking"}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaChair className="text-lg mr-2" />
              {listing.furnished ? "Furnished" : "Not furnished"}
            </li>
          </ul>
        </div>
        <div
          className="w-full h-[200px] lg-[400px]
        z-10 overflow-x-hidden"
        ></div>
      </div>
    </main>
  );
}
