import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function ListingItems({ listing, id }) {
  return (
    <li>
      <Link to={`/category/${listing.type}/${listing.id}`}>
        <img src={listing.imgUrls[0]} alt="" />
        <Moment fromNow>{listing.timestamp.toDate()}</Moment>
      </Link>
    </li>
  );
}
