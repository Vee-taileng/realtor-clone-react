import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedroom: 1,
    bathroom: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountPrice: 0,
  });

  const {
    type,
    name,
    bedroom,
    bathroom,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
  } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sell"
            onChange={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              type === "rent" ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onChange={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              type === "sell" ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
          transition duration-200 ease-in-out focus:text-gray-700 focus:gb-white focus:border-slate-600
          mb-6"
        />
        <div className="flex space-x-6 justify-start mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              placeholder="1"
              id="bedroom"
              value={bedroom}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border 
              border-gray-300 rounded transition duration-200 ease-in-out 
              focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              onChange={onChange}
              min="1"
              max="10"
              required
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              placeholder="1"
              id="bathroom"
              value={bathroom}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border 
              border-gray-300 rounded transition duration-200 ease-in-out 
              focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              onChange={onChange}
              min="1"
              max="10"
              required
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onChange={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              !parking ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onChange={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              parking ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onChange={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              !furnished ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onChange={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              furnished ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
          transition duration-200 ease-in-out focus:text-gray-700 focus:gb-white focus:border-slate-600
          mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
          transition duration-200 ease-in-out focus:text-gray-700 focus:gb-white focus:border-slate-600
          mb-6"
        />

        <p className="text-lg font-semibold">Offer</p>
        <div className="flex">
          <button
            type="button"
            id="offer"
            value={true}
            onChange={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              !offer ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onChange={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-200 ease-in-out w-full ${
              offer ? "bg-white" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        <div className="mt-6 flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white
                border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white
                focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="mt-6 flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discount price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountPrice"
                  value={discountPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white
                border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white
                focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">The first image will be cover (max 6)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 bg-white
                      transition duration-200 ease-in-out rounded focus:bg-white focus:border-slate-600

                      "
          />
        </div>
        <button
          type="submit"
          className="my-6 w-full px-7 p-3 bg-blue-600 text-white
               font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700
               hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
               active:bg-blue-800 active:shadow:shadow-700 transition duration-200
               ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
