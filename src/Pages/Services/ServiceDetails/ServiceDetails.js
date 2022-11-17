import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const product = useLoaderData();
    const {image, name, Price, id} = product;
    return (
      <div className="w-4/5 mx-auto my-12">
        <div className="my-8">
          <img
            className="rounded-lg"
            src={image}
            style={{ width: "100vw", height: "50vh" }}
            alt=""
          />
        </div>
        <div className="flex justify-between items-center my-12">
          <h2 className="text-5xl rounded">Name : {name}</h2>
          <h2 className="text-5xl rounded">Price : ${Price}</h2>
        </div>
        <div>
          <Link
            to={`/ordercheckout/${id}`}
            className="px-4 py-2 bg-red-600 rounded text-white "
          >
            Order Checkout
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetails;