import Image from "next/image";
import React from "react";

export default function ReviewedProduct({
  image,
  title,
  description,
  price,
  rating,
}: {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}) {
  const generateRatingStars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 22 20"
          key={i}
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };
  return (
    <div className="w-1/2">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 m-2 basis-1/2"
      >
        <img
          className="ml-2 object-cover w-full rounded-t-lg md:w-64 lg:w-40  md:rounded-none md:rounded-l-lg cover"
          src={image}
          alt="reviewed product"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg  tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-xs font-normal text-gray-700 ">
            {description}
          </p>
          <p className="mb-3 font-normal text-gray-700 ">
            price : ${price}
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              {generateRatingStars(rating)}{" "}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {rating}.0
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4 basis-1/2">
    <img className="object-cover w-full h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rounded-t-lg mb-4 md:mb-0" src={image} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
    </div>
</a> */}
    </div>
  );
}
