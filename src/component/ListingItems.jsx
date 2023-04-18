import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function ListingItems({ listing, id, onEdit, onDelete }) {
  return (
    <li
      className="relative bg-white flex flex-col justify-between 
    shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow 
    duration-200 m-[10px]"
    >
      <Link className="content" to={`/category/${listing.type}/${id}`}>
        <img
          src={listing.imgUrls[0]}
          loading="lazy"
          alt=""
          className="h-[150px] w-full object-cover hover:scale-105 transition-scale duration-200"
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase
        text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {listing.timestamp.toDate()}
        </Moment>
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-5 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-{2px] text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="font-semibold mt-2 text-xl m-0 truncate">
            {listing.name}
          </p>
          <p className="text-[#457b93] mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice
                  ?.toString()
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  ?.toString()
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs ">
                {listing.bedroom > 1 ? `${listing.bedroom} Beds` : `1 Bed`}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.bathroom > 1 ? `${listing.bathroom} Baths` : `1 Bath`}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {onDelete && (
        <FaTrashAlt
          className="absolute right-2 bottom-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(listing.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer"
          onClick={() => onEdit(listing.id)}
        />
      )}
    </li>
  );
}
