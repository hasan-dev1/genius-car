import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = ({prices}) => {
    const {image, name, Price, id} = prices;
    return (
      <div className="text-center">
        <div className="card card-compact rounded-lg m-auto bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-xl text-red-500 text-start">Price : ${Price}</p>
            <div className="card-actions justify-end">
              <Link
                to={`/servicedetails/${id}`}
                className=" px-4 py-2 bg-success rounded-lg"
              >
                {" "}
                <FaArrowRight></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;